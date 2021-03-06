'use strict';

import { gmail } from '../../config/secrets';
var nodemailer = require('nodemailer');

export var transporter = 
  nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: gmail.user,
      clientId: gmail.clientId,
      clientSecret: gmail.clientSecret,
      refreshToken: gmail.refreshToken
    }
  });

export default {
  transporter
};