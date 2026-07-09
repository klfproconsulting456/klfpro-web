const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api";

let _customerAccessToken: string | null = null;

export const api = {
  setCustomerToken(token: string | null) {
    _customerAccessToken = token;
  },
  
  getAuthHeaders(): Record<string, string> {
    if (typeof window === "undefined") return {};
    const adminToken = localStorage.getItem("klfpro_admin_token");
    
    // If we are on an admin page, always use the admin token
    if (window.location.pathname.startsWith("/admin")) {
      return adminToken ? { Authorization: `Bearer ${adminToken}` } : {};
    }
    
    // Otherwise use the customer token
    return _customerAccessToken ? { Authorization: `Bearer ${_customerAccessToken}` } : {};
  },

  handleUnauthorized(endpoint: string) {
    if (typeof window !== "undefined") {
      // Do not redirect on auth endpoints to allow them to show error messages (like Invalid OTP)
      if (endpoint.includes("/auth/")) return;
      
      if (endpoint.includes("/admin")) {
        localStorage.removeItem("klfpro_admin_token");
        window.location.href = "/admin/login";
      } else {
        _customerAccessToken = null;
        window.location.href = "/login";
      }
    }
  },

  async get(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...this.getAuthHeaders(),
      },
      credentials: "include",
    });

    if (!response.ok) {
      if (response.status === 401) this.handleUnauthorized(endpoint);
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `API Error: ${response.status}`);
    }
    return response.json();
  },

  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...this.getAuthHeaders(),
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 401) this.handleUnauthorized(endpoint);
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `API Error: ${response.status}`);
    }

    return response.json();
  },

  async patch(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...this.getAuthHeaders(),
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status === 401) this.handleUnauthorized(endpoint);
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `API Error: ${response.status}`);
    }

    return response.json();
  },

  async uploadFile(endpoint: string, formData: FormData) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        ...this.getAuthHeaders(),
      },
      credentials: "include",
      body: formData,
    });

    if (!response.ok) {
      if (response.status === 401) this.handleUnauthorized(endpoint);
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `API Error: ${response.status}`);
    }

    return response.json();
  },
};
