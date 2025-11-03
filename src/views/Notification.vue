<template>
  <div class="notification-page">
    <div class="page-header">
      <div>
        <h1>Notifications</h1>
        <p>Stay updated with latest activities</p>
      </div>
      <div class="header-actions">
        <button class="btn-secondary" @click="markAllRead">Mark all as read</button>
        <button class="btn-secondary">⚙️</button>
      </div>
    </div>

    <div class="notification-tabs">
      <button :class="{active: tab === 'all'}" @click="tab = 'all'">
        All <span class="tab-count">{{ notifications.length }}</span>
      </button>
      <button :class="{active: tab === 'unread'}" @click="tab = 'unread'">
        Unread <span class="tab-count">{{ unreadCount }}</span>
      </button>
      <button :class="{active: tab === 'mentions'}" @click="tab = 'mentions'">Mentions</button>
    </div>

    <div class="notifications-list">
      <div v-for="notif in filteredNotifications" :key="notif.id" 
           :class="['notification-item', {unread: !notif.read}]">
        <div class="notif-icon" :class="notif.type">{{ getIcon(notif.type) }}</div>
        <div class="notif-content">
          <h4>{{ notif.title }}</h4>
          <p>{{ notif.message }}</p>
          <span class="notif-time">{{ notif.time }}</span>
        </div>
        <button v-if="!notif.read" class="mark-read-btn" @click="markAsRead(notif.id)">✓</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'all',
      notifications: [
        {id: 1, title: 'New task assigned', message: 'You have been assigned to "Website Redesign" project', time: '5 minutes ago', read: false, type: 'task'},
        {id: 2, title: 'Comment on your task', message: 'Sarah Johnson commented: "Great work on the UI design!"', time: '1 hour ago', read: false, type: 'comment'},
        {id: 3, title: 'Meeting reminder', message: 'Team standup meeting starts in 30 minutes', time: '2 hours ago', read: true, type: 'meeting'},
        {id: 4, title: 'Project completed', message: 'Mobile App Development project has been marked as completed', time: '5 hours ago', read: true, type: 'success'},
        {id: 5, title: 'Leave request approved', message: 'Your leave request for Nov 15-20 has been approved', time: 'Yesterday', read: false, type: 'approval'},
        {id: 6, title: 'Payment processed', message: 'Your salary for October has been processed', time: '2 days ago', read: true, type: 'payment'},
        {id: 7, title: 'New message', message: 'Michael Chen sent you a message', time: '3 days ago', read: true, type: 'message'},
      ]
    }
  },
  computed: {
    unreadCount() {
      return this.notifications.filter(n => !n.read).length
    },
    filteredNotifications() {
      if (this.tab === 'unread') {
        return this.notifications.filter(n => !n.read)
      }
      return this.notifications
    }
  },
  methods: {
    getIcon(type) {
      const icons = {
        task: '📋',
        comment: '💬',
        meeting: '📅',
        success: '✅',
        approval: '👍',
        payment: '💳',
        message: '✉️'
      }
      return icons[type] || '🔔'
    },
    markAsRead(id) {
      const notif = this.notifications.find(n => n.id === id)
      if (notif) notif.read = true
    },
    markAllRead() {
      this.notifications.forEach(n => n.read = true)
    }
  }
}
</script>

<style scoped>
.notification-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.header-actions { display: flex; gap: 12px; }
.btn-secondary { padding: 10px 16px; background: white; border: 1px solid #E5E7EB; border-radius: 8px; cursor: pointer; font-weight: 500; }
.notification-tabs { display: flex; gap: 8px; margin-bottom: 24px; background: white; padding: 4px; border-radius: 8px; width: fit-content; }
.notification-tabs button { padding: 8px 16px; border: none; background: transparent; border-radius: 6px; cursor: pointer; font-weight: 500; display: flex; align-items: center; gap: 6px; }
.notification-tabs button.active { background: #4F46E5; color: white; }
.tab-count { background: rgba(0, 0, 0, 0.1); padding: 2px 8px; border-radius: 10px; font-size: 12px; }
.notification-tabs button.active .tab-count { background: rgba(255, 255, 255, 0.2); }
.notifications-list { background: white; border-radius: 12px; }
.notification-item { display: flex; align-items: start; gap: 16px; padding: 20px; border-bottom: 1px solid #F3F4F6; transition: background 0.2s; }
.notification-item:last-child { border-bottom: none; }
.notification-item:hover { background: #F9FAFB; }
.notification-item.unread { background: #EEF2FF; }
.notif-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; }
.notif-icon.task { background: #DBEAFE; }
.notif-icon.comment { background: #FEF3C7; }
.notif-icon.meeting { background: #E0E7FF; }
.notif-icon.success { background: #D1FAE5; }
.notif-icon.approval { background: #FEE2E2; }
.notif-icon.payment { background: #FCE7F3; }
.notif-icon.message { background: #E0F2FE; }
.notif-content { flex: 1; }
.notif-content h4 { margin: 0 0 4px; font-size: 15px; font-weight: 600; }
.notif-content p { margin: 0 0 8px; font-size: 14px; color: #6B7280; }
.notif-time { font-size: 13px; color: #9CA3AF; }
.mark-read-btn { padding: 8px 12px; background: #4F46E5; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; }
</style>