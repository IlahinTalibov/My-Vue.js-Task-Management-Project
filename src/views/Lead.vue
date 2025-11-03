<template>
  <div class="lead-page">
    <div class="page-header">
      <div>
        <h1>Leads</h1>
        <p>Manage sales leads and opportunities</p>
      </div>
      <button class="btn-primary">+ Add Lead</button>
    </div>

    <div class="pipeline-stats">
      <div class="stat-item">
        <span class="stat-num">42</span>
        <span class="stat-label">New</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">18</span>
        <span class="stat-label">Qualified</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">12</span>
        <span class="stat-label">Proposal</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">8</span>
        <span class="stat-label">Won</span>
      </div>
    </div>

    <div class="lead-board">
      <div v-for="stage in stages" :key="stage.id" class="stage-column">
        <div class="stage-header">
          <h3>{{ stage.name }}</h3>
          <span class="count">{{ stage.leads.length }}</span>
        </div>
        <div class="leads-container">
          <div v-for="lead in stage.leads" :key="lead.id" class="lead-card">
            <div class="lead-header">
              <h4>{{ lead.company }}</h4>
              <span class="value">${{ lead.value }}k</span>
            </div>
            <p class="contact">{{ lead.contact }}</p>
            <div class="lead-footer">
              <span class="priority" :class="lead.priority">{{ lead.priority }}</span>
              <span class="date">{{ lead.date }}</span>
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
      stages: [
        {
          id: 1,
          name: 'New',
          leads: [
            {id: 1, company: 'Acme Corp', contact: 'John Smith', value: 25, priority: 'high', date: 'Nov 1'},
            {id: 2, company: 'Tech Solutions', contact: 'Jane Doe', value: 15, priority: 'medium', date: 'Nov 3'},
          ]
        },
        {
          id: 2,
          name: 'Qualified',
          leads: [
            {id: 3, company: 'Global Inc', contact: 'Mike Johnson', value: 45, priority: 'high', date: 'Oct 28'},
            {id: 4, company: 'Start Co', contact: 'Sara Lee', value: 12, priority: 'low', date: 'Oct 30'},
          ]
        },
        {
          id: 3,
          name: 'Proposal',
          leads: [
            {id: 5, company: 'Enterprise Ltd', contact: 'Bob Wilson', value: 80, priority: 'high', date: 'Oct 25'},
          ]
        },
        {
          id: 4,
          name: 'Won',
          leads: [
            {id: 6, company: 'Big Client', contact: 'Amy Chen', value: 120, priority: 'high', date: 'Oct 20'},
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.lead-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.btn-primary { padding: 10px 20px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; }
.pipeline-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
.stat-item { background: white; padding: 20px; border-radius: 12px; text-align: center; }
.stat-num { display: block; font-size: 32px; font-weight: bold; color: #4F46E5; margin-bottom: 4px; }
.stat-label { display: block; color: #6B7280; font-size: 14px; }
.lead-board { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.stage-column { background: #F9FAFB; border-radius: 12px; padding: 16px; }
.stage-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.stage-header h3 { margin: 0; font-size: 16px; }
.count { background: #E5E7EB; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600; }
.leads-container { display: flex; flex-direction: column; gap: 12px; }
.lead-card { background: white; padding: 16px; border-radius: 8px; cursor: pointer; transition: all 0.2s; }
.lead-card:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); transform: translateY(-2px); }
.lead-header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px; }
.lead-header h4 { margin: 0; font-size: 15px; }
.value { font-weight: bold; color: #059669; }
.contact { margin: 0 0 12px; font-size: 13px; color: #6B7280; }
.lead-footer { display: flex; justify-content: space-between; align-items: center; }
.priority { padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
.priority.high { background: #FEE2E2; color: #991B1B; }
.priority.medium { background: #FEF3C7; color: #92400E; }
.priority.low { background: #E0E7FF; color: #3730A3; }
.date { font-size: 12px; color: #9CA3AF; }
</style>