<template>
  <div class="employees-page">
    <div class="page-header">
      <div>
        <h1>Employees</h1>
        <p>Manage your team members</p>
      </div>
      <button class="btn-primary">+ Add Employee</button>
    </div>

    <div class="filters">
      <input type="text" placeholder="Search..." v-model="search">
      <select v-model="filter">
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>
    </div>

    <div class="employee-grid">
      <div v-for="emp in filteredEmployees" :key="emp.id" class="employee-card">
        <div class="avatar" :style="{backgroundColor: emp.color}">{{emp.initials}}</div>
        <h3>{{emp.name}}</h3>
        <p>{{emp.position}}</p>
        <span class="badge">{{emp.department}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      filter: '',
      employees: [
        {id: 1, name: 'Sarah Johnson', initials: 'SJ', position: 'Frontend Developer', department: 'Engineering', color: '#4F46E5'},
        {id: 2, name: 'Michael Chen', initials: 'MC', position: 'UI Designer', department: 'Design', color: '#7C3AED'},
        {id: 3, name: 'Emily Rodriguez', initials: 'ER', position: 'Marketing Manager', department: 'Marketing', color: '#DC2626'},
        {id: 4, name: 'David Kim', initials: 'DK', position: 'Backend Developer', department: 'Engineering', color: '#059669'},
      ]
    }
  },
  computed: {
    filteredEmployees() {
      return this.employees.filter(e => 
        e.name.toLowerCase().includes(this.search.toLowerCase()) &&
        (!this.filter || e.department === this.filter)
      )
    }
  }
}
</script>

<style scoped>
.employees-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.btn-primary { padding: 10px 20px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; }
.filters { display: flex; gap: 12px; margin-bottom: 24px; }
.filters input, .filters select { padding: 10px; border: 1px solid #E5E7EB; border-radius: 8px; }
.filters input { flex: 1; }
.employee-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px; }
.employee-card { background: white; padding: 20px; border-radius: 12px; text-align: center; }
.avatar { width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 20px; }
.employee-card h3 { margin: 0 0 4px; font-size: 16px; }
.employee-card p { margin: 0 0 8px; color: #6B7280; font-size: 14px; }
.badge { display: inline-block; padding: 4px 12px; background: #EEF2FF; color: #4F46E5; border-radius: 12px; font-size: 12px; }
</style>