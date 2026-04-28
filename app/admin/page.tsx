"use client"

import { TrendingUp, TrendingDown, Package, Users, AlertTriangle, ShoppingBag } from "lucide-react"
import { Area, AreaChart, XAxis, YAxis, Pie, PieChart, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { formatCurrency, formatDateTime } from "@/lib/utils"
import { dashboardStats, revenueChartData, salesByCategoryData, sales } from "@/data/mock-data"
import { getLowStockProducts } from "@/data/products"

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#FF3B00",
  },
}

const categoryChartConfig = {
  tees: { label: "Tees", color: "#FF3B00" },
  bottoms: { label: "Bottoms", color: "#3A3A3A" },
  essentials: { label: "Essentials", color: "#5A5A5A" },
  outerwear: { label: "Outerwear", color: "#F5F5F5" },
  accessories: { label: "Accessories", color: "#1A1A1A" },
}

export default function AdminDashboard() {
  const lowStockProducts = getLowStockProducts()
  const recentSales = sales.slice(0, 5)

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase">Dashboard</h1>
        <p className="text-white/60 text-sm mt-1">Welcome back. Here&apos;s your store overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Sales Today */}
        <Card className="bg-surface border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider">
              Sales Today
            </CardTitle>
            <ShoppingBag className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white font-mono">
              {formatCurrency(dashboardStats.totalSalesToday)}
            </div>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +12.5% from yesterday
            </p>
          </CardContent>
        </Card>

        {/* Total Revenue */}
        <Card className="bg-surface border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider">
              Total Revenue
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white font-mono">
              {formatCurrency(dashboardStats.totalRevenue)}
            </div>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +{dashboardStats.revenueChange}% vs last month
            </p>
          </CardContent>
        </Card>

        {/* Active Products */}
        <Card className="bg-surface border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider">
              Active Products
            </CardTitle>
            <Package className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white font-mono">
              {dashboardStats.activeProducts}
            </div>
            <p className="text-xs text-yellow-500 flex items-center gap-1 mt-1">
              <AlertTriangle className="h-3 w-3" />
              {dashboardStats.lowStockCount} low stock
            </p>
          </CardContent>
        </Card>

        {/* New Customers */}
        <Card className="bg-surface border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider">
              New Customers
            </CardTitle>
            <Users className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white font-mono">
              {dashboardStats.newCustomers}
            </div>
            <p className="text-xs text-white/40 mt-1">
              {dashboardStats.loyaltyPointsIssued.toLocaleString()} pts issued
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Over Time */}
        <Card className="bg-surface border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Revenue Over Time</CardTitle>
            <CardDescription className="text-white/40">Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <AreaChart data={revenueChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF3B00" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF3B00" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{ fill: "#5A5A5A", fontSize: 10 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{ fill: "#5A5A5A", fontSize: 10 }}
                  tickFormatter={(value) => `₱${(value / 1000).toFixed(0)}k`}
                />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#FF3B00"
                  strokeWidth={2}
                  fill="url(#fillRevenue)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Sales by Category */}
        <Card className="bg-surface border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Sales by Category</CardTitle>
            <CardDescription className="text-white/40">Distribution this month</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={categoryChartConfig} className="h-[300px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={salesByCategoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  strokeWidth={2}
                  stroke="#0A0A0A"
                >
                  {salesByCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {salesByCategoryData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3" style={{ backgroundColor: item.fill }} />
                  <span className="text-xs text-white/60">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Sales */}
        <Card className="lg:col-span-2 bg-surface border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Recent Sales</CardTitle>
            <CardDescription className="text-white/40">Latest transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sale ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentSales.map((sale) => (
                  <TableRow key={sale.id}>
                    <TableCell className="font-mono text-xs">{sale.id}</TableCell>
                    <TableCell>{sale.customerName}</TableCell>
                    <TableCell>{sale.items.length}</TableCell>
                    <TableCell className="font-mono">{formatCurrency(sale.totalAmount)}</TableCell>
                    <TableCell className="uppercase text-xs">{sale.paymentMethod}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          sale.status === "completed"
                            ? "success"
                            : sale.status === "pending"
                            ? "warning"
                            : "destructive"
                        }
                      >
                        {sale.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card className="bg-surface border-accent/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-accent" />
              Low Stock Alert
            </CardTitle>
            <CardDescription className="text-white/40">
              Products needing restock
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{product.name}</p>
                    <p className="text-xs text-white/40">
                      Stock: {product.stockQty} / Reorder: {product.reorderLevel}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs">
                    Reorder
                  </Button>
                </div>
              ))}
              {lowStockProducts.length === 0 && (
                <p className="text-sm text-white/40 text-center py-4">
                  All products are well stocked
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
