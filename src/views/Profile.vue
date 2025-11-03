<template>
  <div class="profile-page">
    <div class="profile-header">
      <div class="profile-banner"></div>
      <div class="profile-info">
        <div class="avatar-large">JL</div>
        <div class="user-details">
          <h1>Jhon Lever</h1>
          <p>UI Designer • Baku, Azerbaijan</p>
        </div>
        <button class="btn-edit">Edit Profile</button>
      </div>
    </div>

    <div class="profile-content">
      <div class="sidebar">
        <div class="info-card">
          <h3>Contact Information</h3>
          <div class="info-list">
            <div class="info-item">
              <span class="icon">📧</span>
              <div>
                <span class="label">Email</span>
                <span class="value">jhon.lever@company.com</span>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">📞</span>
              <div>
                <span class="label">Phone</span>
                <span class="value">+994 50 123 4567</span>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">🏢</span>
              <div>
                <span class="label">Department</span>
                <span class="value">Design</span>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">📅</span>
              <div>
                <span class="label">Joined</span>
                <span class="value">Jan 15, 2023</span>
              </div>
            </div>
          </div>
        </div>

        <div class="info-card">
          <h3>Skills</h3>
          <div class="skills-list">
            <span class="skill-tag">UI Design</span>
            <span class="skill-tag">Figma</span>
            <span class="skill-tag">Prototyping</span>
            <span class="skill-tag">User Research</span>
            <span class="skill-tag">Wireframing</span>
          </div>
        </div>
      </div>

      <div class="main-content">
        <div class="content-card">
          <h3>About</h3>
          <p>Experienced UI Designer with a passion for creating intuitive and visually appealing user interfaces. Specializing in modern web design, mobile applications, and design systems.</p>
        </div>

        <div class="content-card">
          <h3>Recent Activity</h3>
          <div class="activity-list">
            <div class="activity-item">
              <span class="activity-icon">✅</span>
              <div>
                <p class="activity-title">Completed project: Website Redesign</p>
                <span class="activity-time">2 hours ago</span>
              </div>
            </div>
            <div class="activity-item">
              <span class="activity-icon">📝</span>
              <div>
                <p class="activity-title">Created new task: Mobile App UI</p>
                <span class="activity-time">5 hours ago</span>
              </div>
            </div>
            <div class="activity-item">
              <span class="activity-icon">💬</span>
              <div>
                <p class="activity-title">Commented on Design System Updates</p>
                <span class="activity-time">1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        <div class="content-card">
          <h3>Statistics</h3>
          <div class="stats-grid">
            <div class="stat-box">
              <span class="stat-number">48</span>
              <span class="stat-label">Tasks Completed</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">12</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">156</span>
              <span class="stat-label">Hours Logged</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">4.8</span>
              <span class="stat-label">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.profile-page { padding: 24px; }
.profile-header { background: white; border-radius: 12px; margin-bottom: 24px; overflow: hidden; }
.profile-banner { height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.profile-info { display: flex; align-items: center; gap: 24px; padding: 0 32px 24px; position: relative; margin-top: -40px; }
.avatar-large { width: 120px; height: 120px; border-radius: 50%; background: #4F46E5; display: flex; align-items: center; justify-content: center; color: white; font-size: 48px; font-weight: bold; border: 4px solid white; }
.user-details { flex: 1; margin-top: 40px; }
.user-details h1 { margin: 0 0 4px; font-size: 28px; }
.user-details p { margin: 0; color: #6B7280; font-size: 16px; }
.btn-edit { padding: 10px 24px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; margin-top: 40px; }
.profile-content { display: grid; grid-template-columns: 350px 1fr; gap: 24px; }
.info-card { background: white; border-radius: 12px; padding: 24px; margin-bottom: 24px; }
.info-card h3 { margin: 0 0 16px; font-size: 18px; }
.info-list { display: flex; flex-direction: column; gap: 16px; }
.info-item { display: flex; gap: 12px; }
.info-item .icon { font-size: 20px; }
.info-item .label { display: block; color: #6B7280; font-size: 13px; margin-bottom: 2px; }
.info-item .value { display: block; font-size: 14px; font-weight: 500; }
.skills-list { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag { padding: 6px 14px; background: #EEF2FF; color: #4F46E5; border-radius: 20px; font-size: 13px; font-weight: 500; }
.content-card { background: white; border-radius: 12px; padding: 24px; margin-bottom: 24px; }
.content-card h3 { margin: 0 0 16px; font-size: 18px; }
.content-card p { margin: 0; color: #6B7280; line-height: 1.6; }
.activity-list { display: flex; flex-direction: column; gap: 16px; }
.activity-item { display: flex; gap: 12px; }
.activity-icon { font-size: 24px; }
.activity-title { margin: 0 0 4px; font-size: 14px; font-weight: 500; }
.activity-time { font-size: 13px; color: #9CA3AF; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.stat-box { text-align: center; padding: 16px; background: #F9FAFB; border-radius: 8px; }
.stat-number { display: block; font-size: 28px; font-weight: bold; color: #4F46E5; margin-bottom: 4px; }
.stat-label { display: block; font-size: 13px; color: #6B7280; }
</style>