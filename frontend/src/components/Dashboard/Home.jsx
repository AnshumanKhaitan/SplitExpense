import React from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Wallet, 
  Users, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Settings,
  Bell,
  Search
} from 'lucide-react'
import './Dashboard.css'

const Home = () => {
  const userName = localStorage.getItem("userName") || "User"

  const stats = [
    { label: 'Total Balance', value: '$1,240.50', icon: <Wallet size={20} />, color: '#6366f1' },
    { label: 'You are owed', value: '$450.00', icon: <ArrowUpRight size={20} />, color: '#22c55e' },
    { label: 'You owe', value: '$120.00', icon: <ArrowDownLeft size={20} />, color: '#ef4444' },
  ]

  const recentExpenses = [
    { id: 1, title: 'Dinner with friends', group: 'Roommates', amount: '$45.00', date: '2 hours ago', type: 'owed' },
    { id: 2, title: 'Netflix Subscription', group: 'Family', amount: '$15.99', date: 'Yesterday', type: 'owe' },
    { id: 3, title: 'Grocery Shopping', group: 'General', amount: '$120.00', date: 'Oct 24', type: 'owed' },
  ]

  return (
    <div className="dashboard-container">
      {/* Sidebar Placeholder (simplified for now) */}
      <nav className="dashboard-nav glass">
        <div className="nav-logo">SplitExpense</div>
        <div className="nav-items">
          <div className="nav-item active"><Wallet size={20} /></div>
          <div className="nav-item"><Users size={20} /></div>
          <div className="nav-item"><TrendingUp size={20} /></div>
          <div className="nav-item"><Settings size={20} /></div>
        </div>
        <div className="nav-profile">
          <div className="profile-avatar">{userName[0]}</div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="main-header">
          <div className="header-left">
            <h1 className="welcome-text">Hey, {userName}! 👋</h1>
            <p className="subtitle-text">Here's what's happening with your expenses today.</p>
          </div>
          <div className="header-right">
            <div className="search-bar glass">
              <Search size={18} />
              <input type="text" placeholder="Search..." />
            </div>
            <button className="icon-btn glass"><Bell size={20} /></button>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card glass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <p className="stat-label">{stat.label}</p>
                <h3 className="stat-value">{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Bottom Section */}
        <div className="dashboard-content">
          {/* Recent Activity */}
          <section className="recent-activity glass">
            <div className="section-header">
              <h2 className="section-title">Recent Expenses</h2>
              <button className="add-btn">
                <Plus size={18} /> Add New
              </button>
            </div>
            <div className="expense-list">
              {recentExpenses.map((expense) => (
                <div key={expense.id} className="expense-item">
                  <div className="expense-info">
                    <div className="expense-icon glass">
                      {expense.type === 'owed' ? <ArrowUpRight size={16} color="#22c55e" /> : <ArrowDownLeft size={16} color="#ef4444" />}
                    </div>
                    <div>
                      <p className="expense-title">{expense.title}</p>
                      <p className="expense-group">{expense.group} • {expense.date}</p>
                    </div>
                  </div>
                  <div className="expense-amount" style={{ color: expense.type === 'owed' ? '#22c55e' : '#ef4444' }}>
                    {expense.type === 'owed' ? '+' : '-'}{expense.amount}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Groups */}
          <section className="quick-groups glass">
            <h2 className="section-title">Your Groups</h2>
            <div className="groups-grid">
              {['Roommates', 'Family', 'Trip 2024', 'Work'].map((group, i) => (
                <div key={i} className="group-card">
                  <div className="group-avatar" style={{ background: `linear-gradient(45deg, #6366f1, #ec4899)` }}>
                    {group[0]}
                  </div>
                  <p className="group-name">{group}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
