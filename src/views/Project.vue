<template>
  <div class="project-page">
    <div class="page-header">
      <div>
        <h1>Projects</h1>
        <p>Track and manage all projects</p>
      </div>
      <button class="btn-primary">+ New Project</button>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <span class="stat-value">12</span>
        <span class="stat-label">Active Projects</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">8</span>
        <span class="stat-label">Completed</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">3</span>
        <span class="stat-label">On Hold</span>
      </div>
    </div>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-header">
          <h3>{{ project.name }}</h3>
          <span :class="['status', project.status]">{{ project.status }}</span>
        </div>
        <p class="description">{{ project.description }}</p>
        <div class="progress-section">
          <div class="progress-bar">
            <div class="progress-fill" :style="{width: project.progress + '%'}"></div>
          </div>
          <span class="progress-text">{{ project.progress }}%</span>
        </div>
        <div class="project-footer">
          <div class="team-avatars">
            <div v-for="(member, i) in project.team" :key="i" class="avatar-sm" :style="{backgroundColor: member.color}">
              {{ member.initials }}
            </div>
          </div>
          <span class="deadline">Due: {{ project.deadline }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1, 
          name: 'Website Redesign', 
          description: 'Complete overhaul of company website with modern UI',
          status: 'active', 
          progress: 65,
          deadline: 'Dec 15, 2025',
          team: [{initials: 'SJ', color: '#4F46E5'}, {initials: 'MC', color: '#7C3AED'}]
        },
        {
          id: 2, 
          name: 'Mobile App Development', 
          description: 'New iOS and Android application for customers',
          status: 'active', 
          progress: 40,
          deadline: 'Jan 20, 2026',
          team: [{initials: 'DK', color: '#059669'}, {initials: 'ER', color: '#DC2626'}]
        },
        {
          id: 3, 
          name: 'Marketing Campaign', 
          description: 'Q4 marketing campaign across all channels',
          status: 'completed', 
          progress: 100,
          deadline: 'Oct 30, 2025',
          team: [{initials: 'ER', color: '#DC2626'}]
        },
        {
          id: 4, 
          name: 'API Integration', 
          description: 'Third-party API integration for payment system',
          status: 'on-hold', 
          progress: 25,
          deadline: 'Nov 30, 2025',
          team: [{initials: 'DK', color: '#059669'}]
        }
      ]
    }
  }
}
</script>

<style scoped>
.project-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.btn-primary { padding: 10px 20px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; }
.stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
.stat-card { background: white; padding: 20px; border-radius: 12px; text-align: center; }
.stat-value { display: block; font-size: 32px; font-weight: bold; color: #4F46E5; }
.stat-label { display: block; margin-top: 4px; color: #6B7280; font-size: 14px; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.project-card { background: white; padding: 20px; border-radius: 12px; }
.project-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px; }
.project-header h3 { margin: 0; font-size: 18px; }
.status { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: capitalize; }
.status.active { background: #DBEAFE; color: #1E40AF; }
.status.completed { background: #D1FAE5; color: #065F46; }
.status.on-hold { background: #FEF3C7; color: #92400E; }
.description { color: #6B7280; font-size: 14px; margin: 0 0 16px; }
.progress-section { margin-bottom: 16px; }
.progress-bar { height: 8px; background: #F3F4F6; border-radius: 4px; overflow: hidden; }
.progress-fill { height: 100%; background: #4F46E5; transition: width 0.3s; }
.progress-text { display: inline-block; margin-top: 4px; font-size: 12px; color: #6B7280; }
.project-footer { display: flex; justify-content: space-between; align-items: center; }
.team-avatars { display: flex; gap: 4px; }
.avatar-sm { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 11px; font-weight: bold; }
.deadline { font-size: 13px; color: #6B7280; }
</style>