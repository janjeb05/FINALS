"use client"

import { Plus, Percent, DollarSign } from "lucide-react"
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
import { formatCurrency, formatDate } from "@/lib/utils"
import { discounts } from "@/data/mock-data"

export default function DiscountsPage() {
  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">Discounts</h1>
          <p className="text-white/60 text-sm mt-1">Manage promotional discounts and offers</p>
        </div>
        <Button variant="accent" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          ADD DISCOUNT
        </Button>
      </div>

      {/* Discounts Table */}
      <Card className="bg-surface border-white/10">
        <CardHeader>
          <CardTitle className="text-white">
            {discounts.length} Discounts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Valid From</TableHead>
                <TableHead>Valid Until</TableHead>
                <TableHead>Applies To</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Toggle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {discounts.map((discount) => (
                <TableRow key={discount.id}>
                  <TableCell className="font-medium">{discount.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {discount.type === "percentage" ? (
                        <Percent className="h-4 w-4 text-accent" />
                      ) : (
                        <DollarSign className="h-4 w-4 text-green-500" />
                      )}
                      <span className="capitalize text-white/60">{discount.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono font-bold">
                    {discount.type === "percentage" ? (
                      <span className="text-accent">{discount.value}%</span>
                    ) : (
                      <span className="text-green-500">{formatCurrency(discount.value)}</span>
                    )}
                  </TableCell>
                  <TableCell className="text-white/60">{formatDate(discount.validFrom)}</TableCell>
                  <TableCell className="text-white/60">{formatDate(discount.validUntil)}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize">
                      {discount.appliesTo}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={discount.status === "active" ? "success" : "secondary"}>
                      {discount.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch checked={discount.status === "active"} />
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
