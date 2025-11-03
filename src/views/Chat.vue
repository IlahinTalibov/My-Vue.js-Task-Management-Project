<template>
  <div class="chat-page">
    <div class="chat-container">
      <div class="chat-sidebar">
        <div class="sidebar-header">
          <h2>Messages</h2>
          <button class="new-chat-btn">✏️</button>
        </div>
        <div class="search-box">
          <input type="text" placeholder="Search..." v-model="searchQuery">
        </div>
        <div class="chat-list">
          <div v-for="chat in chats" :key="chat.id" 
               :class="['chat-item', {active: selectedChat === chat.id}]"
               @click="selectedChat = chat.id">
            <div class="chat-avatar" :style="{backgroundColor: chat.color}">{{ chat.initials }}</div>
            <div class="chat-info">
              <div class="chat-header">
                <span class="chat-name">{{ chat.name }}</span>
                <span class="chat-time">{{ chat.time }}</span>
              </div>
              <p class="last-message">{{ chat.lastMessage }}</p>
            </div>
            <span v-if="chat.unread" class="unread-badge">{{ chat.unread }}</span>
          </div>
        </div>
      </div>

      <div class="chat-main">
        <div class="chat-header">
          <div class="chat-user">
            <div class="avatar-sm" style="background: #4F46E5;">SJ</div>
            <div>
              <h3>Sarah Johnson</h3>
              <span class="status">Online</span>
            </div>
          </div>
          <div class="chat-actions">
            <button class="icon-btn">🔍</button>
            <button class="icon-btn">⋯</button>
          </div>
        </div>

        <div class="messages-container">
          <div v-for="msg in messages" :key="msg.id" :class="['message', msg.type]">
            <div v-if="msg.type === 'received'" class="msg-avatar" style="background: #4F46E5;">SJ</div>
            <div class="message-content">
              <p>{{ msg.text }}</p>
              <span class="msg-time">{{ msg.time }}</span>
            </div>
          </div>
        </div>

        <div class="message-input">
          <button class="attach-btn">📎</button>
          <input type="text" placeholder="Type a message..." v-model="newMessage">
          <button class="send-btn">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedChat: 1,
      newMessage: '',
      chats: [
        {id: 1, name: 'Sarah Johnson', initials: 'SJ', lastMessage: 'Thanks for the update!', time: '10:30', unread: 2, color: '#4F46E5'},
        {id: 2, name: 'Michael Chen', initials: 'MC', lastMessage: 'Can we schedule a meeting?', time: '09:15', unread: 0, color: '#7C3AED'},
        {id: 3, name: 'Emily Rodriguez', initials: 'ER', lastMessage: 'Perfect, see you then', time: 'Yesterday', unread: 1, color: '#DC2626'},
        {id: 4, name: 'David Kim', initials: 'DK', lastMessage: 'The project is ready', time: 'Yesterday', unread: 0, color: '#059669'},
      ],
      messages: [
        {id: 1, text: 'Hey! How is the project going?', time: '10:25', type: 'received'},
        {id: 2, text: 'Great! Almost done with the design', time: '10:26', type: 'sent'},
        {id: 3, text: 'Thanks for the update!', time: '10:30', type: 'received'},
      ]
    }
  }
}
</script>

<style scoped>
.chat-page { padding: 24px; }
.chat-container { display: grid; grid-template-columns: 350px 1fr; height: calc(100vh - 120px); background: white; border-radius: 12px; overflow: hidden; }
.chat-sidebar { border-right: 1px solid #E5E7EB; display: flex; flex-direction: column; }
.sidebar-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #E5E7EB; }
.sidebar-header h2 { margin: 0; font-size: 20px; }
.new-chat-btn { padding: 8px 12px; background: #4F46E5; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; }
.search-box { padding: 16px; }
.search-box input { width: 100%; padding: 10px 16px; border: 1px solid #E5E7EB; border-radius: 8px; font-size: 14px; }
.chat-list { flex: 1; overflow-y: auto; }
.chat-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; cursor: pointer; position: relative; }
.chat-item:hover { background: #F9FAFB; }
.chat-item.active { background: #EEF2FF; }
.chat-avatar { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 16px; }
.chat-info { flex: 1; min-width: 0; }
.chat-header { display: flex; justify-content: space-between; margin-bottom: 4px; }
.chat-name { font-weight: 600; font-size: 14px; }
.chat-time { font-size: 12px; color: #9CA3AF; }
.last-message { margin: 0; font-size: 13px; color: #6B7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.unread-badge { position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: #4F46E5; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 600; }
.chat-main { display: flex; flex-direction: column; }
.chat-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #E5E7EB; }
.chat-user { display: flex; align-items: center; gap: 12px; }
.avatar-sm { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }
.chat-user h3 { margin: 0; font-size: 16px; }
.status { font-size: 13px; color: #10B981; }
.chat-actions { display: flex; gap: 8px; }
.icon-btn { padding: 8px 12px; background: #F3F4F6; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; }
.messages-container { flex: 1; padding: 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; }
.message { display: flex; gap: 12px; max-width: 70%; }
.message.sent { margin-left: auto; flex-direction: row-reverse; }
.msg-avatar { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 12px; }
.message-content { background: #F3F4F6; padding: 12px 16px; border-radius: 12px; }
.message.sent .message-content { background: #4F46E5; color: white; }
.message-content p { margin: 0 0 4px; font-size: 14px; }
.msg-time { font-size: 11px; color: #9CA3AF; }
.message.sent .msg-time { color: rgba(255, 255, 255, 0.7); }
.message-input { display: flex; gap: 12px; padding: 20px; border-top: 1px solid #E5E7EB; }
.attach-btn { padding: 10px 16px; background: #F3F4F6; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; }
.message-input input { flex: 1; padding: 10px 16px; border: 1px solid #E5E7EB; border-radius: 8px; font-size: 14px; }
.send-btn { padding: 10px 24px; background: #4F46E5; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
</style>