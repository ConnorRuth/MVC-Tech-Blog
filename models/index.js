const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.hasMany(Comment, {
  through: Comment
});
Comment.belongsTo(Post, {
  through: Comment
});
User.hasMany(Comment, {
  through: Comment
});
Comment.belongsTo(User, {
  through: Comment
});
module.exports = { User, Post, Comment};