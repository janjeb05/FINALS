"use client"

import { Plus, Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { suppliers } from "@/data/mock-data"

export default function SuppliersPage() {
  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">Suppliers</h1>
          <p className="text-white/60 text-sm mt-1">Manage your product suppliers</p>
        </div>
        <Button variant="accent" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          ADD SUPPLIER
        </Button>
      </div>

      {/* Suppliers Table */}
      <Card className="bg-surface border-white/10">
        <CardHeader>
          <CardTitle className="text-white">
            {suppliers.length} Suppliers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-mono text-xs">SUP-{supplier.id.padStart(3, "0")}</TableCell>
                  <TableCell className="font-medium">{supplier.name}</TableCell>
                  <TableCell className="text-white/60">{supplier.contactPerson}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-white/60">
                      <Phone className="h-3 w-3" />
                      {supplier.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-white/60">
                      <Mail className="h-3 w-3" />
                      {supplier.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-white/40 max-w-[200px] truncate">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      {supplier.address}
                    </div>
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
