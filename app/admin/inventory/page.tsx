"use client"

import { useState } from "react"
import { Search, ArrowDownRight, ArrowUpRight, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
import { formatDateTime } from "@/lib/utils"
import { inventoryMovements } from "@/data/mock-data"

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")

  const filteredMovements = inventoryMovements.filter((movement) => {
    const matchesSearch = movement.productName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || movement.type === typeFilter
    return matchesSearch && matchesType
  })

  // Calculate summaries
  const totalIn = inventoryMovements.filter(m => m.type === "IN").reduce((sum, m) => sum + m.quantity, 0)
  const totalOut = inventoryMovements.filter(m => m.type === "OUT").reduce((sum, m) => sum + Math.abs(m.quantity), 0)
  const netMovement = totalIn - totalOut

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase">Inventory</h1>
        <p className="text-white/60 text-sm mt-1">Track stock movements and adjustments</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-surface border-white/10">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Total Stock In
            </CardTitle>
            <ArrowDownRight className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500 font-mono">+{totalIn}</div>
          </CardContent>
        </Card>
        <Card className="bg-surface border-white/10">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Total Stock Out
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent font-mono">-{totalOut}</div>
          </CardContent>
        </Card>
        <Card className="bg-surface border-white/10">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-xs font-medium text-white/60 uppercase tracking-wider">
              Net Movement
            </CardTitle>
            <RefreshCw className="h-4 w-4 text-white/40" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold font-mono ${netMovement >= 0 ? "text-green-500" : "text-accent"}`}>
              {netMovement >= 0 ? "+" : ""}{netMovement}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-surface border-white/10">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                placeholder="Search by product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Movement Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="IN">Stock In</SelectItem>
                <SelectItem value="OUT">Stock Out</SelectItem>
                <SelectItem value="ADJUSTMENT">Adjustment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Movements Table */}
      <Card className="bg-surface border-white/10">
        <CardHeader>
          <CardTitle className="text-white">
            Movement History ({filteredMovements.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Movement ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Cashier</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMovements.map((movement) => (
                <TableRow key={movement.id}>
                  <TableCell className="font-mono text-xs">{movement.id}</TableCell>
                  <TableCell className="font-medium">{movement.productName}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        movement.type === "IN" ? "info" :
                        movement.type === "OUT" ? "warning" : "secondary"
                      }
                    >
                      {movement.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className={`font-mono font-bold ${
                      movement.type === "IN" ? "text-green-500" :
                      movement.type === "OUT" ? "text-accent" : "text-purple-400"
                    }`}>
                      {movement.type === "IN" ? "+" : ""}{movement.quantity}
                    </span>
                  </TableCell>
                  <TableCell className="text-white/60 max-w-[200px] truncate">
                    {movement.reason}
                  </TableCell>
                  <TableCell className="text-white/40">{movement.cashierName}</TableCell>
                  <TableCell className="text-white/40 text-xs">
                    {formatDateTime(movement.movedAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
