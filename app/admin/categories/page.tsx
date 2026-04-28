"use client"

import { Plus, Pencil } from "lucide-react"
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
import { categories, products } from "@/data/products"

export default function CategoriesPage() {
  const getCategoryProductCount = (slug: string) => {
    return products.filter(p => p.category === slug).length
  }

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">Categories</h1>
          <p className="text-white/60 text-sm mt-1">Manage product categories</p>
        </div>
        <Button variant="accent" className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          ADD CATEGORY
        </Button>
      </div>

      {/* Categories Table */}
      <Card className="bg-surface border-white/10">
        <CardHeader>
          <CardTitle className="text-white">
            {categories.length} Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Products</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-mono text-xs">CAT-{category.id.padStart(3, "0")}</TableCell>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell className="text-white/60 font-mono text-sm">{category.slug}</TableCell>
                  <TableCell className="text-white/40 max-w-[200px] truncate">
                    {category.description}
                  </TableCell>
                  <TableCell className="font-mono">
                    {getCategoryProductCount(category.slug)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
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
