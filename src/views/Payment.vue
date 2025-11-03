<template>
  <div class="payment-page">
    <div class="page-header">
      <div>
        <h1>Payment</h1>
        <p>Manage salary and payments</p>
      </div>
      <button class="btn-primary">+ Process Payment</button>
    </div>

    <div class="summary-cards">
      <div class="summary-card">
        <span class="label">Total Payroll</span>
        <span class="amount">$125,450</span>
        <span class="change positive">+12% from last month</span>
      </div>
      <div class="summary-card">
        <span class="label">Pending Payments</span>
        <span class="amount">$18,200</span>
        <span class="change">8 employees</span>
      </div>
      <div class="summary-card">
        <span class="label">Processed This Month</span>
        <span class="amount">$107,250</span>
        <span class="change">24 payments</span>
      </div>
    </div>

    <div class="payment-table-wrapper">
      <div class="table-header">
        <h3>Recent Payments</h3>
        <div class="filters">
          <select v-model="monthFilter">
            <option value="">All Months</option>
            <option value="october">October</option>
            <option value="november">November</option>
          </select>
          <select v-model="statusFilter">
            <option value="">All Status</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <table class="payment-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Position</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in payments" :key="payment.id">
            <td>
              <div class="employee-cell">
                <div class="avatar-sm" :style="{backgroundColor: payment.color}">{{ payment.initials }}</div>
                <span>{{ payment.name }}</span>
              </div>
            </td>
            <td>{{ payment.position }}</td>
            <td class="amount-cell">${{ payment.amount.toLocaleString() }}</td>
            <td>{{ payment.date }}</td>
            <td><span :class="['status-badge', payment.status]">{{ payment.status }}</span></td>
            <td><button class="action-btn">View Details</button></td>
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
      monthFilter: '',
      statusFilter: '',
      payments: [
        {id: 1, name: 'Sarah Johnson', initials: 'SJ', position: 'Frontend Developer', amount: 6500, date: 'Nov 1, 2025', status: 'paid', color: '#4F46E5'},
        {id: 2, name: 'Michael Chen', initials: 'MC', position: 'UI Designer', amount: 5800, date: 'Nov 1, 2025', status: 'paid', color: '#7C3AED'},
        {id: 3, name: 'Emily Rodriguez', initials: 'ER', position: 'Marketing Manager', amount: 7200, date: 'Nov 5, 2025', status: 'pending', color: '#DC2626'},
        {id: 4, name: 'David Kim', initials: 'DK', position: 'Backend Developer', amount: 7000, date: 'Nov 1, 2025', status: 'paid', color: '#059669'},
        {id: 5, name: 'Jessica Williams', initials: 'JW', position: 'Sales Director', amount: 8500, date: 'Nov 5, 2025', status: 'pending', color: '#D97706'},
      ]
    }
  }
}
</script>

<style scoped>
.payment-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.btn-primary { padding: 10px 20px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; }
.summary-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
.summary-card { background: white; padding: 20px; border-radius: 12px; }
.summary-card .label { display: block; color: #6B7280; font-size: 14px; margin-bottom: 8px; }
.summary-card .amount { display: block; font-size: 32px; font-weight: bold; margin-bottom: 4px; }
.summary-card .change { display: block; font-size: 14px; color: #6B7280; }
.summary-card .change.positive { color: #059669; }
.payment-table-wrapper { background: white; border-radius: 12px; padding: 20px; }
.table-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.table-header h3 { margin: 0; }
.filters { display: flex; gap: 12px; }
.filters select { padding: 8px 12px; border: 1px solid #E5E7EB; border-radius: 8px; font-size: 14px; }
.payment-table { width: 100%; border-collapse: collapse; }
.payment-table th { text-align: left; padding: 12px; border-bottom: 2px solid #F3F4F6; color: #6B7280; font-size: 14px; font-weight: 600; }
.payment-table td { padding: 16px 12px; border-bottom: 1px solid #F3F4F6; }
.employee-cell { display: flex; align-items: center; gap: 12px; }
.avatar-sm { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px; font-weight: bold; }
.amount-cell { font-weight: 600; color: #111827; }
.status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: capitalize; }
.status-badge.paid { background: #D1FAE5; color: #065F46; }
.status-badge.pending { background: #FEF3C7; color: #92400E; }
.action-btn { padding: 6px 12px; background: #F3F4F6; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; }
.action-btn:hover { background: #E5E7EB; }
</style>