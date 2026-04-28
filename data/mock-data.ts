// Mock data for admin dashboard

export interface Sale {
  id: string
  cashierId: string
  cashierName: string
  customerId: string | null
  customerName: string | null
  saleDate: string
  subtotal: number
  discountAmount: number
  taxAmount: number
  totalAmount: number
  paymentMethod: "cash" | "card" | "gcash" | "maya"
  amountTendered: number
  changeGiven: number
  status: "completed" | "pending" | "voided"
  items: SaleItem[]
}

export interface SaleItem {
  id: string
  saleId: string
  productId: string
  productName: string
  quantity: number
  unitPrice: number
  discountPct: number
  lineTotal: number
}

export interface Customer {
  id: string
  fullName: string
  phone: string
  email: string
  loyaltyPoints: number
  totalSpent: number
  joinedDate: string
}

export interface InventoryMovement {
  id: string
  productId: string
  productName: string
  cashierId: string
  cashierName: string
  type: "IN" | "OUT" | "ADJUSTMENT"
  quantity: number
  reason: string
  movedAt: string
}

export interface PurchaseOrder {
  id: string
  supplierId: string
  supplierName: string
  cashierId: string
  cashierName: string
  orderDate: string
  receivedDate: string | null
  totalCost: number
  status: "pending" | "received" | "cancelled"
  items: POItem[]
}

export interface POItem {
  id: string
  poId: string
  productId: string
  productName: string
  qtyOrdered: number
  qtyReceived: number
  unitCost: number
}

export interface Supplier {
  id: string
  name: string
  contactPerson: string
  phone: string
  email: string
  address: string
}

export interface Cashier {
  id: string
  fullName: string
  username: string
  role: "admin" | "cashier" | "manager"
  status: "active" | "inactive"
}

export interface Discount {
  id: string
  name: string
  type: "percentage" | "fixed"
  value: number
  validFrom: string
  validUntil: string
  appliesTo: "all" | "category" | "product"
  status: "active" | "inactive"
}

// Generate mock sales data
export const sales: Sale[] = [
  {
    id: "SALE-001",
    cashierId: "1",
    cashierName: "Juan Dela Cruz",
    customerId: "1",
    customerName: "Maria Santos",
    saleDate: "2025-04-29T10:30:00",
    subtotal: 3698,
    discountAmount: 0,
    taxAmount: 443.76,
    totalAmount: 4141.76,
    paymentMethod: "gcash",
    amountTendered: 4141.76,
    changeGiven: 0,
    status: "completed",
    items: [
      { id: "SI-001", saleId: "SALE-001", productId: "1", productName: "Freedom Oversized Tee", quantity: 2, unitPrice: 1299, discountPct: 0, lineTotal: 2598 },
      { id: "SI-002", saleId: "SALE-001", productId: "9", productName: "Street Legend Cap", quantity: 1, unitPrice: 1099, discountPct: 0, lineTotal: 1099 },
    ],
  },
  {
    id: "SALE-002",
    cashierId: "1",
    cashierName: "Juan Dela Cruz",
    customerId: "2",
    customerName: "Pedro Reyes",
    saleDate: "2025-04-29T11:15:00",
    subtotal: 5098,
    discountAmount: 509.8,
    taxAmount: 550.58,
    totalAmount: 5138.78,
    paymentMethod: "card",
    amountTendered: 5138.78,
    changeGiven: 0,
    status: "completed",
    items: [
      { id: "SI-003", saleId: "SALE-002", productId: "4", productName: "Street Denim", quantity: 1, unitPrice: 2799, discountPct: 10, lineTotal: 2519.1 },
      { id: "SI-004", saleId: "SALE-002", productId: "7", productName: "Limitless Crewneck", quantity: 1, unitPrice: 2199, discountPct: 10, lineTotal: 1979.1 },
    ],
  },
  {
    id: "SALE-003",
    cashierId: "2",
    cashierName: "Ana Garcia",
    customerId: null,
    customerName: "Walk-in Customer",
    saleDate: "2025-04-29T14:22:00",
    subtotal: 4799,
    discountAmount: 0,
    taxAmount: 575.88,
    totalAmount: 5374.88,
    paymentMethod: "cash",
    amountTendered: 5500,
    changeGiven: 125.12,
    status: "completed",
    items: [
      { id: "SI-005", saleId: "SALE-003", productId: "13", productName: "Flight Bomber", quantity: 1, unitPrice: 4799, discountPct: 0, lineTotal: 4799 },
    ],
  },
  {
    id: "SALE-004",
    cashierId: "2",
    cashierName: "Ana Garcia",
    customerId: "3",
    customerName: "Jose Cruz",
    saleDate: "2025-04-29T15:45:00",
    subtotal: 2398,
    discountAmount: 0,
    taxAmount: 287.76,
    totalAmount: 2685.76,
    paymentMethod: "maya",
    amountTendered: 2685.76,
    changeGiven: 0,
    status: "pending",
    items: [
      { id: "SI-006", saleId: "SALE-004", productId: "8", productName: "Underground Hoodie", quantity: 1, unitPrice: 2399, discountPct: 0, lineTotal: 2399 },
    ],
  },
  {
    id: "SALE-005",
    cashierId: "1",
    cashierName: "Juan Dela Cruz",
    customerId: "4",
    customerName: "Rosa Mendoza",
    saleDate: "2025-04-28T09:30:00",
    subtotal: 8497,
    discountAmount: 849.7,
    taxAmount: 917.68,
    totalAmount: 8564.98,
    paymentMethod: "card",
    amountTendered: 8564.98,
    changeGiven: 0,
    status: "completed",
    items: [
      { id: "SI-007", saleId: "SALE-005", productId: "12", productName: "Rebel Denim Jacket", quantity: 1, unitPrice: 4299, discountPct: 10, lineTotal: 3869.1 },
      { id: "SI-008", saleId: "SALE-005", productId: "2", productName: "Urban Rebel Tee", quantity: 2, unitPrice: 1399, discountPct: 10, lineTotal: 2518.2 },
      { id: "SI-009", saleId: "SALE-005", productId: "10", productName: "Signature Leather Belt", quantity: 1, unitPrice: 1699, discountPct: 10, lineTotal: 1529.1 },
    ],
  },
  {
    id: "SALE-006",
    cashierId: "2",
    cashierName: "Ana Garcia",
    customerId: null,
    customerName: "Walk-in Customer",
    saleDate: "2025-04-28T16:00:00",
    subtotal: 1299,
    discountAmount: 0,
    taxAmount: 155.88,
    totalAmount: 1454.88,
    paymentMethod: "cash",
    amountTendered: 1500,
    changeGiven: 45.12,
    status: "voided",
    items: [
      { id: "SI-010", saleId: "SALE-006", productId: "1", productName: "Freedom Oversized Tee", quantity: 1, unitPrice: 1299, discountPct: 0, lineTotal: 1299 },
    ],
  },
]

export const customers: Customer[] = [
  { id: "1", fullName: "Maria Santos", phone: "+63 917 123 4567", email: "maria.santos@email.com", loyaltyPoints: 2450, totalSpent: 24500, joinedDate: "2024-06-15" },
  { id: "2", fullName: "Pedro Reyes", phone: "+63 918 234 5678", email: "pedro.reyes@email.com", loyaltyPoints: 1890, totalSpent: 18900, joinedDate: "2024-08-22" },
  { id: "3", fullName: "Jose Cruz", phone: "+63 919 345 6789", email: "jose.cruz@email.com", loyaltyPoints: 3200, totalSpent: 32000, joinedDate: "2024-03-10" },
  { id: "4", fullName: "Rosa Mendoza", phone: "+63 920 456 7890", email: "rosa.mendoza@email.com", loyaltyPoints: 5600, totalSpent: 56000, joinedDate: "2023-11-05" },
  { id: "5", fullName: "Carlos Tan", phone: "+63 921 567 8901", email: "carlos.tan@email.com", loyaltyPoints: 980, totalSpent: 9800, joinedDate: "2025-01-20" },
  { id: "6", fullName: "Lisa Aquino", phone: "+63 922 678 9012", email: "lisa.aquino@email.com", loyaltyPoints: 4100, totalSpent: 41000, joinedDate: "2024-02-14" },
]

export const inventoryMovements: InventoryMovement[] = [
  { id: "IM-001", productId: "1", productName: "Freedom Oversized Tee", cashierId: "1", cashierName: "Juan Dela Cruz", type: "IN", quantity: 50, reason: "New stock arrival - PO-001", movedAt: "2025-04-25T09:00:00" },
  { id: "IM-002", productId: "2", productName: "Urban Rebel Tee", cashierId: "1", cashierName: "Juan Dela Cruz", type: "IN", quantity: 40, reason: "New stock arrival - PO-001", movedAt: "2025-04-25T09:15:00" },
  { id: "IM-003", productId: "1", productName: "Freedom Oversized Tee", cashierId: "2", cashierName: "Ana Garcia", type: "OUT", quantity: 5, reason: "Sale - SALE-001", movedAt: "2025-04-29T10:30:00" },
  { id: "IM-004", productId: "3", productName: "Midnight Vibes Graphic Tee", cashierId: "1", cashierName: "Juan Dela Cruz", type: "ADJUSTMENT", quantity: -2, reason: "Damaged items - quality control", movedAt: "2025-04-28T14:00:00" },
  { id: "IM-005", productId: "6", productName: "Summer Freedom Shorts", cashierId: "2", cashierName: "Ana Garcia", type: "OUT", quantity: 3, reason: "Sale - SALE-007", movedAt: "2025-04-27T11:45:00" },
  { id: "IM-006", productId: "12", productName: "Rebel Denim Jacket", cashierId: "1", cashierName: "Juan Dela Cruz", type: "IN", quantity: 15, reason: "New stock arrival - PO-002", movedAt: "2025-04-20T10:00:00" },
]

export const purchaseOrders: PurchaseOrder[] = [
  {
    id: "PO-001",
    supplierId: "1",
    supplierName: "Premium Fabrics Co.",
    cashierId: "1",
    cashierName: "Juan Dela Cruz",
    orderDate: "2025-04-20",
    receivedDate: "2025-04-25",
    totalCost: 65000,
    status: "received",
    items: [
      { id: "POI-001", poId: "PO-001", productId: "1", productName: "Freedom Oversized Tee", qtyOrdered: 50, qtyReceived: 50, unitCost: 650 },
      { id: "POI-002", poId: "PO-001", productId: "2", productName: "Urban Rebel Tee", qtyOrdered: 40, qtyReceived: 40, unitCost: 700 },
    ],
  },
  {
    id: "PO-002",
    supplierId: "2",
    supplierName: "StreetStyle Wholesale",
    cashierId: "1",
    cashierName: "Juan Dela Cruz",
    orderDate: "2025-04-15",
    receivedDate: "2025-04-20",
    totalCost: 32250,
    status: "received",
    items: [
      { id: "POI-003", poId: "PO-002", productId: "12", productName: "Rebel Denim Jacket", qtyOrdered: 15, qtyReceived: 15, unitCost: 2150 },
    ],
  },
  {
    id: "PO-003",
    supplierId: "3",
    supplierName: "Urban Accessories Ltd.",
    cashierId: "2",
    cashierName: "Ana Garcia",
    orderDate: "2025-04-28",
    receivedDate: null,
    totalCost: 27500,
    status: "pending",
    items: [
      { id: "POI-004", poId: "PO-003", productId: "9", productName: "Street Legend Cap", qtyOrdered: 50, qtyReceived: 0, unitCost: 550 },
    ],
  },
]

export const suppliers: Supplier[] = [
  { id: "1", name: "Premium Fabrics Co.", contactPerson: "Michael Tan", phone: "+63 917 111 2222", email: "michael@premiumfabrics.com", address: "123 Textile Ave, Makati City" },
  { id: "2", name: "StreetStyle Wholesale", contactPerson: "Sarah Lee", phone: "+63 918 333 4444", email: "sarah@streetstyle.com", address: "456 Fashion St, BGC" },
  { id: "3", name: "Urban Accessories Ltd.", contactPerson: "David Chen", phone: "+63 919 555 6666", email: "david@urbanacc.com", address: "789 Accessories Blvd, Quezon City" },
]

export const cashiers: Cashier[] = [
  { id: "1", fullName: "Juan Dela Cruz", username: "juan.dc", role: "admin", status: "active" },
  { id: "2", fullName: "Ana Garcia", username: "ana.garcia", role: "cashier", status: "active" },
  { id: "3", fullName: "Mark Reyes", username: "mark.reyes", role: "manager", status: "active" },
  { id: "4", fullName: "Lisa Santos", username: "lisa.santos", role: "cashier", status: "inactive" },
]

export const discounts: Discount[] = [
  { id: "1", name: "New Customer", type: "percentage", value: 10, validFrom: "2025-01-01", validUntil: "2025-12-31", appliesTo: "all", status: "active" },
  { id: "2", name: "Loyalty Member", type: "percentage", value: 15, validFrom: "2025-01-01", validUntil: "2025-12-31", appliesTo: "all", status: "active" },
  { id: "3", name: "Summer Sale", type: "percentage", value: 20, validFrom: "2025-04-01", validUntil: "2025-06-30", appliesTo: "category", status: "active" },
  { id: "4", name: "Fixed Discount", type: "fixed", value: 500, validFrom: "2025-04-15", validUntil: "2025-05-15", appliesTo: "all", status: "active" },
]

// Dashboard KPIs
export const dashboardStats = {
  totalSalesToday: 17341.18,
  totalRevenue: 156789.50,
  revenueChange: 12.5,
  activeProducts: 14,
  lowStockCount: 4,
  newCustomers: 23,
  loyaltyPointsIssued: 1734,
}

// Chart data for Revenue Over Time (30 days)
export const revenueChartData = [
  { date: "Apr 1", revenue: 45000 },
  { date: "Apr 2", revenue: 52000 },
  { date: "Apr 3", revenue: 38000 },
  { date: "Apr 4", revenue: 61000 },
  { date: "Apr 5", revenue: 55000 },
  { date: "Apr 6", revenue: 67000 },
  { date: "Apr 7", revenue: 72000 },
  { date: "Apr 8", revenue: 48000 },
  { date: "Apr 9", revenue: 53000 },
  { date: "Apr 10", revenue: 59000 },
  { date: "Apr 11", revenue: 64000 },
  { date: "Apr 12", revenue: 71000 },
  { date: "Apr 13", revenue: 78000 },
  { date: "Apr 14", revenue: 82000 },
  { date: "Apr 15", revenue: 56000 },
  { date: "Apr 16", revenue: 49000 },
  { date: "Apr 17", revenue: 62000 },
  { date: "Apr 18", revenue: 68000 },
  { date: "Apr 19", revenue: 74000 },
  { date: "Apr 20", revenue: 81000 },
  { date: "Apr 21", revenue: 85000 },
  { date: "Apr 22", revenue: 58000 },
  { date: "Apr 23", revenue: 63000 },
  { date: "Apr 24", revenue: 69000 },
  { date: "Apr 25", revenue: 76000 },
  { date: "Apr 26", revenue: 83000 },
  { date: "Apr 27", revenue: 89000 },
  { date: "Apr 28", revenue: 95000 },
  { date: "Apr 29", revenue: 78000 },
]

// Sales by category for donut chart
export const salesByCategoryData = [
  { name: "Tees", value: 35, fill: "#FF3B00" },
  { name: "Bottoms", value: 25, fill: "#3A3A3A" },
  { name: "Essentials", value: 20, fill: "#5A5A5A" },
  { name: "Outerwear", value: 12, fill: "#F5F5F5" },
  { name: "Accessories", value: 8, fill: "#1A1A1A" },
]
