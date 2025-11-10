'use client';

import { FaTimes, FaShoppingCart, FaTicketAlt, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

interface Notification {
  id: string;
  type: 'order' | 'offer' | 'alert' | 'info';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

interface NotificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ isOpen, onClose }) => {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'order',
      title: 'Order Delivered',
      message: 'Your order #ORD-12345 has been successfully delivered.',
      time: '5 min ago',
      isRead: false,
    },
    {
      id: '2',
      type: 'offer',
      title: 'Special Offer',
      message: 'Get 50% off on your next order. Use code: FOOD50',
      time: '1 hour ago',
      isRead: false,
    },
    {
      id: '3',
      type: 'alert',
      title: 'Order Update',
      message: 'Your order #ORD-12346 is out for delivery.',
      time: '2 hours ago',
      isRead: true,
    },
    {
      id: '4',
      type: 'info',
      title: 'New Feature',
      message: 'Now track your order in real-time with live GPS tracking.',
      time: '1 day ago',
      isRead: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <FaShoppingCart className="w-5 h-5 text-green-500" />;
      case 'offer':
        return <FaTicketAlt className="w-5 h-5 text-orange-500" />;
      case 'alert':
        return <FaExclamationTriangle className="w-5 h-5 text-red-500" />;
      case 'info':
        return <FaInfoCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <FaInfoCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const markAllAsRead = () => {
    // Handle mark all as read logic
    console.log('Mark all as read');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0  z-50 flex items-start justify-end pt-16 border-b border-[#FF6347]  p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl w-full max-w-sm mx-4 mt-2 shadow-xl transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#FF6347]">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Notifications</h2>
            <p className="text-sm text-gray-500">{notifications.filter(n => !n.isRead).length} unread</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={markAllAsRead}
              className="text-sm text-orange-500 hover:text-orange-600 font-medium"
            >
              Mark all read
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-8 text-center">
              <FaInfoCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No notifications yet</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  !notification.isRead ? 'bg-orange-50' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-semibold ${
                        !notification.isRead ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {notification.title}
                      </h3>
                      <span className="text-xs text-gray-400">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    {!notification.isRead && (
                      <div className="flex items-center mt-2">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        <span className="text-xs text-orange-500">New</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full text-center text-orange-500 hover:text-orange-600 font-medium py-2">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;