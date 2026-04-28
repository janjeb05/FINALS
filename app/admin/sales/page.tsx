"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { formatCurrency, formatDateTime } from "@/lib/utils"
import { sales } from "@/data/mock-data"

export default function SalesPage() {
  const [expandedSale, setExpandedSale] = useState<string | null>(null)

  // Calculate KPIs
  const totalTransactions = sales.filter(s => s.status !== "voided").length
  const grossRevenue = sales.filter(s => s.status !== "voided").reduce((sum, s) => sum + s.subtotal, 0)
  const taxCollected = sales.filter(s => s.status !== "voided").reduce((sum, s) => sum + s.taxAmount, 0)
  const discountsGiven = sales.filter(s => s.status !== "voided").reduce((sum, s) => sum + s.discountAmount, 0)
  const netRevenue = sales.filter(s => s.status !== "voided").reduce((sum, s) => sum + s.totalAmount, 0)

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">Sales</h1>
          <p className="text-white/60 text-sm mt-1">View and manage sales transactions</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Date Range
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-surface border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white font-mono">{totalTransactions}</div>
          </CardContent>
        </Card>
        <Card className="bg-surface border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Gross Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white font-mono">{formatCurrency(grossRevenue)}</div>
          </CardContent>
        </Card>
        <Card className="bg-surface border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Tax Collected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white font-mono">{formatCurrency(taxCollected)}</div>
          </CardContent>
        </Card>
        <Card className="bg-surface border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Discounts Given
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent font-mono">-{formatCurrency(discountsGiven)}</div>
          </CardContent>
        </Card>
        <Card className="bg-surface border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Net Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500 font-mono">{formatCurrency(netRevenue)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Sales Table */}
      <Card className="bg-surface border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Sales History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10"></TableHead>
                <TableHead>Sale ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Cashier</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Tax</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.map((sale) => (
                <>
                  <TableRow key={sale.id} className="cursor-pointer" onClick={() => setExpandedSale(expandedSale === sale.id ? null : sale.id)}>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        {expandedSale === sale.id ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs">{sale.id}</TableCell>
                    <TableCell>{sale.customerName}</TableCell>
                    <TableCell className="text-white/60">{sale.cashierName}</TableCell>
                    <TableCell>{sale.items.length}</TableCell>
                    <TableCell className="font-mono">{formatCurrency(sale.subtotal)}</TableCell>
                    <TableCell className="font-mono text-accent">
                      {sale.discountAmount > 0 ? `-${formatCurrency(sale.discountAmount)}` : "-"}
                    </TableCell>
                    <TableCell className="font-mono text-white/60">{formatCurrency(sale.taxAmount)}</TableCell>
                    <TableCell className="font-mono font-bold">{formatCurrency(sale.totalAmount)}</TableCell>
                    <TableCell className="uppercase text-xs">{sale.paymentMethod}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          sale.status === "completed" ? "success" :
                          sale.status === "pending" ? "warning" : "destructive"
                        }
                      >
                        {sale.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-white/40 text-xs">
                      {formatDateTime(sale.saleDate)}
                    </TableCell>
                  </TableRow>
                  {expandedSale === sale.id && (
                    <TableRow>
                      <TableCell colSpan={12} className="bg-background/50 p-4">
                        <div className="pl-6">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                            Sale Items
                          </h4>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Qty</TableHead>
                                <TableHead>Unit Price</TableHead>
                                <TableHead>Discount</TableHead>
                                <TableHead>Line Total</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {sale.items.map((item) => (
                                <TableRow key={item.id}>
                                  <TableCell>{item.productName}</TableCell>
                                  <TableCell>{item.quantity}</TableCell>
                                  <TableCell className="font-mono">{formatCurrency(item.unitPrice)}</TableCell>
                                  <TableCell className="text-accent">
                                    {item.discountPct > 0 ? `${item.discountPct}%` : "-"}
                                  </TableCell>
                                  <TableCell className="font-mono">{formatCurrency(item.lineTotal)}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
