<template>
  <div class="leave-page">
    <div class="page-header">
      <div>
        <h1>Leave Management</h1>
        <p>Manage employee leave requests</p>
      </div>
      <button class="btn-primary">+ Request Leave</button>
    </div>

    <div class="leave-stats">
      <div class="stat-box">
        <span class="icon">📅</span>
        <div>
          <span class="value">15</span>
          <span class="label">Available Days</span>
        </div>
      </div>
      <div class="stat-box">
        <span class="icon">✅</span>
        <div>
          <span class="value">8</span>
          <span class="label">Used Days</span>
        </div>
      </div>
      <div class="stat-box">
        <span class="icon">⏳</span>
        <div>
          <span class="value">3</span>
          <span class="label">Pending</span>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button :class="{active: tab === 'all'}" @click="tab = 'all'">All Requests</button>
      <button :class="{active: tab === 'pending'}" @click="tab = 'pending'">Pending</button>
      <button :class="{active: tab === 'approved'}" @click="tab = 'approved'">Approved</button>
    </div>

    <div class="leave-list">
      <div v-for="leave in filteredLeaves" :key="leave.id" class="leave-item">
        <div class="leave-user">
          <div class="avatar" :style="{backgroundColor: leave.color}">{{ leave.initials }}</div>
          <div>
            <h4>{{ leave.name }}</h4>
            <p>{{ leave.department }}</p>
          </div>
        </div>
        <div class="leave-details">
          <span class="leave-type">{{ leave.type }}</span>
          <span class="date-range">{{ leave.startDate }} - {{ leave.endDate }}</span>
          <span class="duration">{{ leave.days }} days</span>
        </div>
        <span :class="['leave-status', leave.status]">{{ leave.status }}</span>
        <div class="leave-actions" v-if="leave.status === 'pending'">
          <button class="btn-approve">Approve</button>
          <button class="btn-reject">Reject</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'all',
      leaves: [
        {id: 1, name: 'Sarah Johnson', initials: 'SJ', department: 'Engineering', type: 'Annual Leave', startDate: 'Nov 15', endDate: 'Nov 20', days: 5, status: 'pending', color: '#4F46E5'},
        {id: 2, name: 'Michael Chen', initials: 'MC', department: 'Design', type: 'Sick Leave', startDate: 'Nov 10', endDate: 'Nov 12', days: 2, status: 'approved', color: '#7C3AED'},
        {id: 3, name: 'Emily Rodriguez', initials: 'ER', department: 'Marketing', type: 'Personal Leave', startDate: 'Dec 1', endDate: 'Dec 5', days: 4, status: 'pending', color: '#DC2626'},
        {id: 4, name: 'David Kim', initials: 'DK', department: 'Engineering', type: 'Annual Leave', startDate: 'Oct 25', endDate: 'Oct 28', days: 3, status: 'approved', color: '#059669'},
      ]
    }
  },
  computed: {
    filteredLeaves() {
      if (this.tab === 'all') return this.leaves
      return this.leaves.filter(l => l.status === this.tab)
    }
  }
}
</script>

<style scoped>
.leave-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.btn-primary { padding: 10px 20px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; }
.leave-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
.stat-box { background: white; padding: 20px; border-radius: 12px; display: flex; align-items: center; gap: 16px; }
.stat-box .icon { font-size: 32px; }
.stat-box .value { display: block; font-size: 24px; font-weight: bold; }
.stat-box .label { display: block; color: #6B7280; font-size: 14px; }
.tabs { display: flex; gap: 8px; margin-bottom: 24px; background: white; padding: 4px; border-radius: 8px; width: fit-content; }
.tabs button { padding: 8px 16px; border: none; background: transparent; border-radius: 6px; cursor: pointer; font-weight: 500; }
.tabs button.active { background: #4F46E5; color: white; }
.leave-list { background: white; border-radius: 12px; padding: 16px; }
.leave-item { display: grid; grid-template-columns: 1fr 2fr auto auto; gap: 16px; align-items: center; padding: 16px; border-radius: 8px; margin-bottom: 8px; background: #F9FAFB; }
.leave-user { display: flex; align-items: center; gap: 12px; }
.avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
.leave-user h4 { margin: 0; font-size: 14px; }
.leave-user p { margin: 2px 0 0; font-size: 12px; color: #6B7280; }
.leave-details { display: flex; gap: 12px; flex-wrap: wrap; }
.leave-type, .date-range, .duration { padding: 4px 12px; background: white; border-radius: 6px; font-size: 13px; }
.leave-status { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: capitalize; }
.leave-status.pending { background: #FEF3C7; color: #92400E; }
.leave-status.approved { background: #D1FAE5; color: #065F46; }
.leave-status.rejected { background: #FEE2E2; color: #991B1B; }
.leave-actions { display: flex; gap: 8px; }
.btn-approve, .btn-reject { padding: 6px 16px; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600; }
.btn-approve { background: #D1FAE5; color: #065F46; }
.btn-reject { background: #FEE2E2; color: #991B1B; }
</style>