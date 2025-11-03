<template>
  <div class="invoice-page">
    <div class="page-header">
      <div>
        <h1>Invoices</h1>
        <p>Manage billing and invoices</p>
      </div>
      <button class="btn-primary">+ Create Invoice</button>
    </div>

    <div class="invoice-stats">
      <div class="stat-card">
        <span class="label">Total Revenue</span>
        <span class="amount">$245,680</span>
        <span class="period">This month</span>
      </div>
      <div class="stat-card">
        <span class="label">Pending</span>
        <span class="amount">$32,450</span>
        <span class="period">12 invoices</span>
      </div>
      <div class="stat-card">
        <span class="label">Overdue</span>
        <span class="amount overdue">$8,920</span>
        <span class="period">3 invoices</span>
      </div>
    </div>

    <div class="filters-bar">
      <input type="text" placeholder="Search invoices..." v-model="search" class="search-input">
      <select v-model="statusFilter">
        <option value="">All Status</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>

    <div class="invoice-table">
      <table>
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>Client</th>
            <th>Date</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in filteredInvoices" :key="invoice.id">
            <td class="invoice-num">{{ invoice.number }}</td>
            <td>{{ invoice.client }}</td>
            <td>{{ invoice.date }}</td>
            <td>{{ invoice.dueDate }}</td>
            <td class="amount-cell">${{ invoice.amount.toLocaleString() }}</td>
            <td><span :class="['status-badge', invoice.status]">{{ invoice.status }}</span></td>
            <td>
              <div class="actions">
                <button class="icon-btn" title="View">👁️</button>
                <button class="icon-btn" title="Download">⬇️</button>
                <button class="icon-btn" title="Send">📧</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      statusFilter: '',
      invoices: [
        {id: 1, number: 'INV-001', client: 'Acme Corp', date: 'Nov 1, 2025', dueDate: 'Nov 30, 2025', amount: 12500, status: 'paid'},
        {id: 2, number: 'INV-002', client: 'Tech Solutions', date: 'Nov 5, 2025', dueDate: 'Dec 5, 2025', amount: 8900, status: 'pending'},
        {id: 3, number: 'INV-003', client: 'Global Inc', date: 'Oct 20, 2025', dueDate: 'Nov 20, 2025', amount: 15600, status: 'paid'},
        {id: 4, number: 'INV-004', client: 'Start Co', date: 'Oct 15, 2025', dueDate: 'Oct 30, 2025', amount: 4200, status: 'overdue'},
        {id: 5, number: 'INV-005', client: 'Enterprise Ltd', date: 'Nov 10, 2025', dueDate: 'Dec 10, 2025', amount: 28000, status: 'pending'},
      ]
    }
  },
  computed: {
    filteredInvoices() {
      return this.invoices.filter(inv => {
        const matchesSearch = inv.client.toLowerCase().includes(this.search.toLowerCase()) ||
                            inv.number.toLowerCase().includes(this.search.toLowerCase());
        const matchesStatus = !this.statusFilter || inv.status === this.statusFilter;
        return matchesSearch && matchesStatus;
      });
    }
  }
}
</script>

<style scoped>
.invoice-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.btn-primary { padding: 10px 20px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; }
.invoice-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
.stat-card { background: white; padding: 20px; border-radius: 12px; }
.stat-card .label { display: block; color: #6B7280; font-size: 14px; margin-bottom: 8px; }
.stat-card .amount { display: block; font-size: 28px; font-weight: bold; margin-bottom: 4px; }
.stat-card .amount.overdue { color: #DC2626; }
.stat-card .period { display: block; font-size: 13px; color: #9CA3AF; }
.filters-bar { display: flex; gap: 12px; margin-bottom: 24px; }
.search-input { flex: 1; padding: 10px 16px; border: 1px solid #E5E7EB; border-radius: 8px; font-size: 14px; }
.filters-bar select { padding: 10px 16px; border: 1px solid #E5E7EB; border-radius: 8px; font-size: 14px; }
.invoice-table { background: white; border-radius: 12px; overflow: hidden; }
table { width: 100%; border-collapse: collapse; }
thead { background: #F9FAFB; }
th { text-align: left; padding: 12px 16px; font-size: 12px; font-weight: 600; color: #6B7280; }
td { padding: 16px; border-top: 1px solid #F3F4F6; }
.invoice-num { font-weight: 600; color: #4F46E5; }
.amount-cell { font-weight: 600; }
.status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: capitalize; }
.status-badge.paid { background: #D1FAE5; color: #065F46; }
.status-badge.pending { background: #FEF3C7; color: #92400E; }
.status-badge.overdue { background: #FEE2E2; color: #991B1B; }
.actions { display: flex; gap: 8px; }
.icon-btn { padding: 6px 10px; background: #F3F4F6; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; }
.icon-btn:hover { background: #E5E7EB; }
</style>