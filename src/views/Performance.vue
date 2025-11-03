<template>
  <div class="performance-page">
    <div class="page-header">
      <div>
        <h1>Performance</h1>
        <p>Track employee performance metrics</p>
      </div>
      <button class="btn-primary">+ New Review</button>
    </div>

    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-header">
          <span class="icon">⭐</span>
          <span class="trend up">+5%</span>
        </div>
        <h3>4.2</h3>
        <p>Average Rating</p>
      </div>
      <div class="metric-card">
        <div class="metric-header">
          <span class="icon">🎯</span>
          <span class="trend up">+12%</span>
        </div>
        <h3>85%</h3>
        <p>Goals Achieved</p>
      </div>
      <div class="metric-card">
        <div class="metric-header">
          <span class="icon">📈</span>
          <span class="trend">0%</span>
        </div>
        <h3>92%</h3>
        <p>Task Completion</p>
      </div>
    </div>

    <div class="performance-list">
      <h3>Team Performance</h3>
      <div v-for="perf in performances" :key="perf.id" class="performance-item">
        <div class="employee-info">
          <div class="avatar" :style="{backgroundColor: perf.color}">{{ perf.initials }}</div>
          <div>
            <h4>{{ perf.name }}</h4>
            <p>{{ perf.position }}</p>
          </div>
        </div>
        
        <div class="metrics">
          <div class="metric-item">
            <span class="label">Rating</span>
            <div class="stars">
              <span v-for="i in 5" :key="i" :class="{filled: i <= perf.rating}">★</span>
            </div>
          </div>
          <div class="metric-item">
            <span class="label">Tasks</span>
            <span class="value">{{ perf.tasks }}</span>
          </div>
          <div class="metric-item">
            <span class="label">Goals</span>
            <div class="progress-mini">
              <div class="progress-fill" :style="{width: perf.goals + '%'}"></div>
            </div>
            <span class="value-sm">{{ perf.goals }}%</span>
          </div>
        </div>

        <button class="view-btn">View Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      performances: [
        {id: 1, name: 'Sarah Johnson', initials: 'SJ', position: 'Frontend Developer', rating: 5, tasks: 24, goals: 90, color: '#4F46E5'},
        {id: 2, name: 'Michael Chen', initials: 'MC', position: 'UI Designer', rating: 4, tasks: 18, goals: 85, color: '#7C3AED'},
        {id: 3, name: 'Emily Rodriguez', initials: 'ER', position: 'Marketing Manager', rating: 5, tasks: 32, goals: 95, color: '#DC2626'},
        {id: 4, name: 'David Kim', initials: 'DK', position: 'Backend Developer', rating: 4, tasks: 28, goals: 80, color: '#059669'},
        {id: 5, name: 'Jessica Williams', initials: 'JW', position: 'Sales Director', rating: 5, tasks: 20, goals: 92, color: '#D97706'},
      ]
    }
  }
}
</script>

<style scoped>
.performance-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.btn-primary { padding: 10px 20px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; }
.metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
.metric-card { background: white; padding: 20px; border-radius: 12px; }
.metric-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.metric-header .icon { font-size: 24px; }
.trend { padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; background: #F3F4F6; color: #6B7280; }
.trend.up { background: #D1FAE5; color: #065F46; }
.metric-card h3 { margin: 0 0 4px; font-size: 32px; font-weight: bold; }
.metric-card p { margin: 0; color: #6B7280; font-size: 14px; }
.performance-list { background: white; border-radius: 12px; padding: 20px; }
.performance-list > h3 { margin: 0 0 20px; }
.performance-item { display: grid; grid-template-columns: 1fr 2fr auto; gap: 24px; align-items: center; padding: 16px; border-radius: 8px; margin-bottom: 12px; background: #F9FAFB; }
.employee-info { display: flex; align-items: center; gap: 12px; }
.avatar { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px; }
.employee-info h4 { margin: 0; font-size: 15px; }
.employee-info p { margin: 2px 0 0; font-size: 13px; color: #6B7280; }
.metrics { display: flex; gap: 32px; }
.metric-item { display: flex; flex-direction: column; gap: 4px; }
.metric-item .label { font-size: 12px; color: #6B7280; }
.stars { color: #FCD34D; font-size: 16px; }
.stars span.filled { color: #F59E0B; }
.value { font-weight: 600; font-size: 16px; }
.progress-mini { width: 80px; height: 6px; background: #E5E7EB; border-radius: 3px; overflow: hidden; }
.progress-fill { height: 100%; background: #4F46E5; }
.value-sm { font-size: 13px; font-weight: 600; }
.view-btn { padding: 8px 16px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; }
</style>