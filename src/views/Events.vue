<template>
  <div class="events-page">
    <div class="page-header">
      <div>
        <h1>Events</h1>
        <p>Manage company events and meetings</p>
      </div>
      <button class="btn-primary">+ Create Event</button>
    </div>

    <div class="calendar-view">
      <div class="calendar-header">
        <button @click="prevMonth">‹</button>
        <h2>{{ currentMonth }}</h2>
        <button @click="nextMonth">›</button>
      </div>
      <div class="calendar-grid">
        <div class="day-header" v-for="day in days" :key="day">{{ day }}</div>
        <div v-for="date in calendarDates" :key="date" class="calendar-day" :class="{today: isToday(date)}">
          {{ date }}
        </div>
      </div>
    </div>

    <div class="events-list">
      <h3>Upcoming Events</h3>
      <div v-for="event in events" :key="event.id" class="event-item">
        <div class="event-date">
          <span class="month">{{ event.month }}</span>
          <span class="day">{{ event.day }}</span>
        </div>
        <div class="event-info">
          <h4>{{ event.title }}</h4>
          <p>{{ event.time }} • {{ event.location }}</p>
        </div>
        <span :class="['event-type', event.type]">{{ event.type }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      events: [
        {id: 1, title: 'Team Meeting', day: 15, month: 'Nov', time: '10:00 AM', location: 'Conference Room A', type: 'meeting'},
        {id: 2, title: 'Product Launch', day: 20, month: 'Nov', time: '2:00 PM', location: 'Main Hall', type: 'company'},
        {id: 3, title: 'Training Workshop', day: 25, month: 'Nov', time: '9:00 AM', location: 'Training Center', type: 'training'},
      ]
    }
  },
  computed: {
    currentMonth() {
      return this.currentDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})
    },
    calendarDates() {
      return Array.from({length: 30}, (_, i) => i + 1)
    }
  },
  methods: {
    prevMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1)
      this.$forceUpdate()
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1)
      this.$forceUpdate()
    },
    isToday(date) {
      return date === new Date().getDate()
    }
  }
}
</script>

<style scoped>
.events-page { padding: 24px; }
.page-header { display: flex; justify-content: space-between; margin-bottom: 24px; }
.page-header h1 { margin: 0; font-size: 24px; }
.page-header p { margin: 4px 0 0; color: #6B7280; }
.btn-primary { padding: 10px 20px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; }
.calendar-view { background: white; padding: 20px; border-radius: 12px; margin-bottom: 24px; }
.calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.calendar-header button { padding: 8px 16px; border: none; background: #F3F4F6; border-radius: 8px; cursor: pointer; }
.calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; }
.day-header { text-align: center; font-weight: 600; padding: 8px; color: #6B7280; }
.calendar-day { text-align: center; padding: 12px; border-radius: 8px; cursor: pointer; }
.calendar-day:hover { background: #F3F4F6; }
.calendar-day.today { background: #4F46E5; color: white; }
.events-list { background: white; padding: 20px; border-radius: 12px; }
.events-list h3 { margin: 0 0 16px; }
.event-item { display: flex; align-items: center; gap: 16px; padding: 16px; border-radius: 8px; margin-bottom: 12px; background: #F9FAFB; }
.event-date { text-align: center; min-width: 60px; }
.event-date .month { display: block; font-size: 12px; color: #6B7280; }
.event-date .day { display: block; font-size: 24px; font-weight: bold; }
.event-info { flex: 1; }
.event-info h4 { margin: 0 0 4px; font-size: 16px; }
.event-info p { margin: 0; font-size: 14px; color: #6B7280; }
.event-type { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: capitalize; }
.event-type.meeting { background: #DBEAFE; color: #1E40AF; }
.event-type.company { background: #FEE2E2; color: #991B1B; }
.event-type.training { background: #D1FAE5; color: #065F46; }
</style>