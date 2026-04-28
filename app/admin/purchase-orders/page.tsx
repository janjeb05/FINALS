"use client"

import { useState } from "react"
import { Plus, ChevronDown, ChevronRight } from "lucide-react"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formatCurrency, formatDate } from "@/lib/utils"
import { purchaseOrders } from "@/data/mock-data"

export default function PurchaseOrdersPage() {
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [expandedPO, setExpandedPO] = useState<string | null>(null)

  const filteredOrders = purchaseOrders.filter((po) => {
    return statusFilter === "all" || po.status === statusFilter
  })

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">Purchase Orders</h1>
          <p className="text-white/60 text-sm mt-1">Manage supplier orders and receiving</p>
        </div>
        <Button variant="accent" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          NEW PO
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-surface border-white/10">
        <CardContent className="p-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="received">Received</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Purchase Orders Table */}
      <Card className="bg-surface border-white/10">
        <CardHeader>
          <CardTitle className="text-white">
            {filteredOrders.length} Purchase Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10"></TableHead>
                <TableHead>PO #</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Cashier</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Received Date</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((po) => (
                <>
                  <TableRow key={po.id} className="cursor-pointer" onClick={() => setExpandedPO(expandedPO === po.id ? null : po.id)}>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        {expandedPO === po.id ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-sm font-bold">{po.id}</TableCell>
                    <TableCell>{po.supplierName}</TableCell>
                    <TableCell className="text-white/60">{po.cashierName}</TableCell>
                    <TableCell className="text-white/60">{formatDate(po.orderDate)}</TableCell>
                    <TableCell className="text-white/60">
                      {po.receivedDate ? formatDate(po.receivedDate) : "-"}
                    </TableCell>
                    <TableCell className="font-mono">{formatCurrency(po.totalCost)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          po.status === "received" ? "success" :
                          po.status === "pending" ? "warning" : "destructive"
                        }
                      >
                        {po.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                  </TableRow>
                  {expandedPO === po.id && (
                    <TableRow>
                      <TableCell colSpan={8} className="bg-background/50 p-4">
                        <div className="pl-6">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                            PO Items
                          </h4>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Qty Ordered</TableHead>
                                <TableHead>Qty Received</TableHead>
                                <TableHead>Unit Cost</TableHead>
                                <TableHead>Total</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {po.items.map((item) => (
                                <TableRow key={item.id}>
                                  <TableCell>{item.productName}</TableCell>
                                  <TableCell className="font-mono">{item.qtyOrdered}</TableCell>
                                  <TableCell className="font-mono">
                                    <span className={item.qtyReceived < item.qtyOrdered ? "text-yellow-500" : "text-green-500"}>
                                      {item.qtyReceived}
                                    </span>
                                  </TableCell>
                                  <TableCell className="font-mono">{formatCurrency(item.unitCost)}</TableCell>
                                  <TableCell className="font-mono">{formatCurrency(item.qtyOrdered * item.unitCost)}</TableCell>
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
