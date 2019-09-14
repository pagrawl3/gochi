const CONST = require('../const');
const ObjectId = require('mongoose').Types.ObjectId;

exports.Category = [
  { _id: new ObjectId(), title: 'High Priority Bug', color: '#EF233C', duration: 3600 },
  { _id: new ObjectId(), title: 'Low Priority Bug', color: '#FFB63F', duration: 3600 * 12 },
  { _id: new ObjectId(), title: 'Feature Request', color: '#2B2D42', duration: 3600 * 12 },
  { _id: new ObjectId(), title: 'Doubt', color: '#8D99AE', duration: 3600 * 12 }
];

exports.Status = [
  { _id: new ObjectId(), title: 'First Reply Needed' },
  { _id: new ObjectId(), title: 'Tag Needed' },
  { _id: new ObjectId(), title: 'Follow Up Needed' },
  { _id: new ObjectId(), title: 'Waiting for Reply' }
];

exports.Dashboard = {
  default: {
    _id: new ObjectId(),
    email: 'platform.support@haptik.co',
    title: 'On Call Dashboard',
    durationType: CONST.DURATION_TYPES.WEEKLY,
    startDate: new Date(),
    categories: exports.Category.map(category => category._id),
    statuses: exports.Status.map(status => status._id)
  }
};

exports.User = {
  admin: {
    _id: new ObjectId(),
    email: 'pratham.agrawal92@gmail.com',
    name: 'Pratham Agrawal',
    dashboards: [exports.Dashboard.default]
  }
};
