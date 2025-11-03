<template>
  <div class="dashboard-page">
    <div class="page-header">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome back, Jhon!</p>
      </div>
      <div class="date-selector">
        <select v-model="selectedPeriod">
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-icon" style="background: #DBEAFE;">📋</span>
          <span class="trend up">+12%</span>
        </div>
        <h3>24</h3>
        <p>Active Tasks</p>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-icon" style="background: #D1FAE5;">✅</span>
          <span class="trend up">+8%</span>
        </div>
        <h3>156</h3>
        <p>Completed</p>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-icon" style="background: #FEE2E2;">👥</span>
          <span class="trend">0%</span>
        </div>
        <h3>48</h3>
        <p>Team Members</p>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-icon" style="background: #FEF3C7;">📊</span>
          <span class="trend up">+15%</span>
        </div>
        <h3>12</h3>
        <p>Projects</p>
      </div>
    </div>

    <div class="dashboard-content">
      <div class="main-col">
        <div class="card">
          <div class="card-header">
            <h3>Recent Tasks</h3>
            <button class="view-all-btn">View All →</button>
          </div>
          <div class="task-list">
            <div v-for="task in recentTasks" :key="task.id" class="task-item">
              <input type="checkbox" :checked="task.completed">
              <div class="task-info">
                <h4>{{ task.title }}</h4>
                <p>{{ task.project }}</p>
              </div>
              <span :class="['priority', task.priority]">{{ task.priority }}</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3>Project Progress</h3>
          </div>
          <div class="project-list">
            <div v-for="project in projects" :key="project.id" class="project-item">
              <div class="project-info">
                <h4>{{ project.name }}</h4>
                <span class="progress-text">{{ project.progress }}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" :style="{width: project.progress + '%', background: project.color}"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="side-col">
        <div class="card">
          <h3>Upcoming Events</h3>
          <div class="event-list">
            <div v-for="event in events" :key="event.id" class="event-item">
              <div class="event-date">
                <span class="day">{{ event.day }}</span>
                <span class="month">{{ event.month }}</span>
              </div>
              <div class="event-info">
                <h4>{{ event.title }}</h4>
                <p>{{ event.time }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Team Activity</h3>
          <div class="activity-list">
            <div v-for="activity in activities" :key="activity.id" class="activity-item">
              <div class="activity-avatar" :style="{backgroundColor: activity.color}">{{ activity.initials }}</div>
              <div class="activity-info">
                <p><strong>{{ activity.user }}</strong> {{ activity.action }}</p>
                <span class="time">{{ activity.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPeriod: 'week',
      recentTasks: [
        {id: 1, title: 'Update dashboard UI', project: 'Website Redesign', priority: 'high', completed: false},
        {id: 2, title: 'Review pull requests', project: 'Mobile App', priority: 'medium', completed: true},
        {id: 3, title: 'Client meeting preparation', project: 'Marketing', priority: 'high', completed: false},
      ],
      projects: [
        {id: 1, name: 'Website Redesign', progress: 75, color: '#4F46E5'},
        {id: 2, name: 'Mobile App', progress: 45, color: '#059669'},
        {id: 3, name: 'Marketing Campaign', progress: 90, color: '#DC2626'},
      ],
      events: [
        {id: 1, title: 'Team Meeting', day: '15', month: 'Nov', time: '10:00 AM'},
        {id: 2, title: 'Client Call', day: '18', month: 'Nov', time: '2:00 PM'},
        {id: 3, title: 'Project Review', day: '22', month: 'Nov', time: '11:00 AM'},
      ],
      activities: [
        {id: 1, user: 'Sarah Johnson', initials: 'SJ', action: 'completed a task', time: '5 min ago', color: '#4F46E5'},
        {id: 2, user: 'Michael Chen', initials: 'MC', action: 'uploaded files', time: '1 hour ago', color: '#7C3AED'},
        {id: 3, user: 'Emily Rodriguez', initials: 'ER', action: 'commented on task', time: '2 hours ago', color: '#DC2626'},
      ]
    }
  }
}
</script>

<style scoped>
.dashboard-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.date-selector select { padding: 10px 16px; border: 1px solid #E5E7EB; border-radius: 8px; font-size: 14px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
.stat-card { background: white; padding: 20px; border-radius: 12px; }
.stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.stat-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
.trend { padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; background: #F3F4F6; color: #6B7280; }
.trend.up { background: #D1FAE5; color: #065F46; }
.stat-card h3 { margin: 0 0 4px; font-size: 28px; font-weight: bold; }
.stat-card p { margin: 0; color: #6B7280; font-size: 14px; }
.dashboard-content { display: grid; grid-template-columns: 1fr 350px; gap: 24px; }
.card { background: white; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.card h3 { margin: 0 0 16px; font-size: 18px; }
.view-all-btn { padding: 6px 12px; background: #F3F4F6; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 500; }
.task-list { display: flex; flex-direction: column; gap: 12px; }
.task-item { display: flex; align-items: center; gap: 12px; padding: 12px; background: #F9FAFB; border-radius: 8px; }
.task-item input { width: 18px; height: 18px; }
.task-info { flex: 1; }
.task-info h4 { margin: 0 0 2px; font-size: 14px; }
.task-info p { margin: 0; font-size: 12px; color: #6B7280; }
.priority { padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
.priority.high { background: #FEE2E2; color: #991B1B; }
.priority.medium { background: #FEF3C7; color: #92400E; }
.project-list { display: flex; flex-direction: column; gap: 16px; }
.project-item { }
.project-info { display: flex; justify-content: space-between; margin-bottom: 8px; }
.project-info h4 { margin: 0; font-size: 14px; }
.progress-text { font-size: 13px; font-weight: 600; }
.progress-bar { height: 8px; background: #F3F4F6; border-radius: 4px; overflow: hidden; }
.progress-fill { height: 100%; transition: width 0.3s; }
.event-list { display: flex; flex-direction: column; gap: 12px; }
.event-item { display: flex; gap: 12px; padding: 12px; background: #F9FAFB; border-radius: 8px; }
.event-date { text-align: center; min-width: 50px; }
.event-date .day { display: block; font-size: 20px; font-weight: bold; }
.event-date .month { display: block; font-size: 12px; color: #6B7280; }
.event-info h4 { margin: 0 0 2px; font-size: 14px; }
.event-info p { margin: 0; font-size: 12px; color: #6B7280; }
.activity-list { display: flex; flex-direction: column; gap: 12px; }
.activity-item { display: flex; gap: 12px; }
.activity-avatar { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 13px; }
.activity-info p { margin: 0 0 2px; font-size: 14px; }
.time { font-size: 12px; color: #9CA3AF; }
</style>