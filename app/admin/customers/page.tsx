"use client"

import { useState } from "react"
import { Search, Star, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { formatCurrency, formatDate } from "@/lib/utils"
import { customers, sales } from "@/data/mock-data"
import type { Customer } from "@/data/mock-data"

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

  const filteredCustomers = customers.filter((customer) => {
    return customer.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
  })

  const getCustomerSales = (customerId: string) => {
    return sales.filter(s => s.customerId === customerId)
  }

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase">Customers</h1>
        <p className="text-white/60 text-sm mt-1">Manage customer accounts and loyalty</p>
      </div>

      {/* Search */}
      <Card className="bg-surface border-white/10">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <Input
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Customers Table */}
      <Card className="bg-surface border-white/10">
        <CardHeader>
          <CardTitle className="text-white">
            {filteredCustomers.length} Customers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer ID</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Loyalty Points</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Member Since</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow
                  key={customer.id}
                  className="cursor-pointer hover:bg-surface-elevated"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <TableCell className="font-mono text-xs">CUST-{customer.id.padStart(3, "0")}</TableCell>
                  <TableCell className="font-medium">{customer.fullName}</TableCell>
                  <TableCell className="text-white/60">{customer.phone}</TableCell>
                  <TableCell className="text-white/60">{customer.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="font-mono">{customer.loyaltyPoints.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono">{formatCurrency(customer.totalSpent)}</TableCell>
                  <TableCell className="text-white/40 text-xs">
                    {formatDate(customer.joinedDate)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Customer Detail Sheet */}
      <Sheet open={!!selectedCustomer} onOpenChange={() => setSelectedCustomer(null)}>
        <SheetContent className="bg-[#0A0A0A] w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="text-white font-mono uppercase tracking-wider">
              Customer Details
            </SheetTitle>
          </SheetHeader>
          
          {selectedCustomer && (
            <div className="mt-6 space-y-6">
              {/* Customer Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-white font-bold text-2xl">
                    {selectedCustomer.fullName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedCustomer.fullName}</h3>
                    <p className="text-white/40 text-sm">Member since {formatDate(selectedCustomer.joinedDate)}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface p-4 border border-white/10">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Loyalty Points</p>
                    <p className="text-2xl font-bold text-yellow-500 font-mono flex items-center gap-2">
                      <Star className="h-5 w-5 fill-yellow-500" />
                      {selectedCustomer.loyaltyPoints.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-surface p-4 border border-white/10">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Total Spent</p>
                    <p className="text-2xl font-bold text-green-500 font-mono">
                      {formatCurrency(selectedCustomer.totalSpent)}
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/40">Email</span>
                    <span className="text-white">{selectedCustomer.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Phone</span>
                    <span className="text-white">{selectedCustomer.phone}</span>
                  </div>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              {/* Purchase History */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/60">Purchase History</h4>
                <div className="space-y-2">
                  {getCustomerSales(selectedCustomer.id).map((sale) => (
                    <div key={sale.id} className="flex justify-between items-center bg-surface p-3 border border-white/10">
                      <div>
                        <p className="text-sm text-white font-mono">{sale.id}</p>
                        <p className="text-xs text-white/40">{formatDate(sale.saleDate)}</p>
                      </div>
                      <p className="font-mono text-white">{formatCurrency(sale.totalAmount)}</p>
                    </div>
                  ))}
                  {getCustomerSales(selectedCustomer.id).length === 0 && (
                    <p className="text-white/40 text-sm text-center py-4">No purchases yet</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
