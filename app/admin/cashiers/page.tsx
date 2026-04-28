"use client"

import { Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cashiers } from "@/data/mock-data"

export default function CashiersPage() {
  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">Cashiers</h1>
          <p className="text-white/60 text-sm mt-1">Manage staff accounts and roles</p>
        </div>
        <Button variant="accent" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          ADD CASHIER
        </Button>
      </div>

      {/* Cashiers Table */}
      <Card className="bg-surface border-white/10">
        <CardHeader>
          <CardTitle className="text-white">
            {cashiers.length} Staff Members
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Active</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cashiers.map((cashier) => (
                <TableRow key={cashier.id}>
                  <TableCell className="font-mono text-xs">STAFF-{cashier.id.padStart(3, "0")}</TableCell>
                  <TableCell className="font-medium">{cashier.fullName}</TableCell>
                  <TableCell className="text-white/60 font-mono text-sm">@{cashier.username}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        cashier.role === "admin" ? "accent" :
                        cashier.role === "manager" ? "info" : "secondary"
                      }
                      className="capitalize"
                    >
                      {cashier.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={cashier.status === "active" ? "success" : "secondary"}>
                      {cashier.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch checked={cashier.status === "active"} />
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
