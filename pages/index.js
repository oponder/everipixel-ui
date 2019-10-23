import React, { Component } from 'react';
import Header from '../components/header';
import { Canvas } from '../components/canvas';
import Pizzicato  from 'pizzicato';
import { List } from 'react-virtualized';
import EVTWrapper from '../lib/evt';

const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');

const WIDTH = 50;
const HEIGHT = 50;
const SCALE = 10;

const UNKNOWN_TOKEN_EXCEPTION = 3040201;

// Production
const SERVERURL = "http://35.240.173.157:8000"
const EVTIP = "35.240.176.101"
const CACHED_BOARD_RESPONSE = {"board":["#E50000",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E4E4E4","#E4E4E4","#E4E4E4","#E4E4E4",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E4E4E4",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000","#E50000","#E50000",null,"#E50000",null,null,null,null,null,null,null,"#E50000",null,"#E50000",null,"#E50000",null,null,null,"#E50000","#E50000","#E50000",null,null,"#E50000",null,null,"#E50000","#E50000","#E50000",null,"#E50000","#E50000","#E50000","#E4E4E4",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000",null,null,null,"#E50000",null,null,null,null,null,null,null,"#E50000","#E50000",null,null,null,null,"#E50000",null,null,null,"#E50000",null,"#E50000","#E50000",null,null,"#E50000",null,"#E50000",null,null,null,"#E50000","#E4E4E4",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000","#E50000",null,null,"#E50000","#E50000","#E50000",null,"#E50000",null,"#E50000",null,"#E50000",null,null,null,"#E50000",null,null,null,"#E50000","#E50000","#E50000",null,null,"#E50000",null,null,"#E50000","#E50000","#E50000",null,"#E50000","#E50000","#E50000",null,null,null,null,null,null,null,null,null,null,"#0083C7","#00D3DD",null,null,null,null,null,"#E50000",null,"#E50000",null,"#E50000",null,"#E50000",null,"#E50000",null,"#E50000","#E50000",null,null,"#E50000",null,"#E50000",null,"#E50000",null,null,null,null,"#E50000",null,null,"#E50000",null,"#E50000",null,null,null,"#E50000",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000","#E50000","#E50000",null,"#E50000",null,"#E50000",null,"#E50000","#E50000","#E50000",null,"#E50000",null,"#E50000",null,"#E50000",null,null,null,"#E50000","#E50000","#E50000",null,"#E50000","#E50000","#E50000",null,"#E50000","#E50000","#E50000",null,"#E50000","#E50000","#E50000",null,"#0000EA",null,null,null,"#0000EA",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#0000EA","#0000EA",null,"#0000EA","#0000EA",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#888888","#888888","#888888","#888888","#888888","#222222","#222222",null,null,"#0000EA",null,"#0000EA",null,"#0000EA",null,"#0000EA",null,null,"#0000EA",null,"#222222","#0000EA","#0000EA","#0000EA",null,"#0000EA","#0000EA","#0000EA",null,null,"#0000EA","#0000EA","#0000EA",null,null,"#222222","#0000EA","#0000EA","#0000EA",null,null,"#0000EA","#0000EA","#222222",null,null,null,null,null,null,"#888888","#E4E4E4","#E4E4E4","#E4E4E4","#888888","#222222","#222222",null,null,"#0000EA",null,"#0000EA",null,"#0000EA",null,"#0000EA",null,null,"#0000EA",null,"#0000EA",null,null,null,null,"#0000EA",null,null,"#0000EA",null,"#222222",null,null,"#0000EA",null,"#0000EA",null,null,null,null,"#0000EA",null,null,"#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000",null,"#E4E4E4","#888888","#888888","#888888","#222222","#222222",null,null,"#0000EA",null,"#0000EA",null,"#0000EA",null,"#0000EA",null,null,"#0000EA",null,"#222222","#0000EA","#0000EA","#222222",null,"#0000EA",null,null,"#0000EA",null,"#222222","#0000EA","#0000EA","#0000EA",null,"#0000EA",null,null,null,null,"#0000EA","#0000EA","#0000EA","#0000EA",null,null,"#E50000",null,null,null,"#888888","#E4E4E4","#E4E4E4","#E4E4E4","#888888",null,"#888888",null,null,"#0000EA",null,null,null,"#0000EA",null,null,"#0000EA","#0000EA","#0000EA",null,null,null,"#222222","#0000EA",null,"#0000EA","#0000EA","#0000EA",null,null,"#0000EA","#222222","#222222","#0000EA",null,"#0000EA",null,null,null,null,"#0000EA",null,null,"#222222",null,null,null,null,null,null,"#888888","#888888",null,"#E4E4E4","#888888",null,"#888888",null,null,"#0000EA",null,null,null,"#0000EA",null,null,null,null,"#0000EA",null,"#0000EA","#0000EA","#0000EA","#222222",null,"#0000EA",null,null,null,null,"#222222","#0000EA","#0000EA","#0000EA",null,"#222222","#0000EA","#0000EA","#0000EA",null,null,"#0000EA","#0000EA","#0000EA",null,null,"#E50000",null,null,null,"#888888","#E4E4E4","#E4E4E4","#E4E4E4","#888888",null,"#888888",null,"#94E044",null,null,null,null,null,null,null,"#0000EA","#0000EA",null,null,"#222222","#222222","#222222",null,null,"#222222",null,null,null,null,null,"#222222","#222222","#222222",null,null,null,null,null,null,null,null,null,null,null,"#E50000","#E50000",null,null,null,"#888888","#888888","#888888","#888888","#888888",null,"#888888",null,"#02BE01",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000",null,null,null,"#888888","#E4E4E4","#888888","#E4E4E4","#888888",null,"#888888",null,"#00D3DD",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000",null,"#E50000",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#820080",null,null,null,"#888888","#E4E4E4","#888888","#E4E4E4","#888888",null,"#888888",null,"#0083C7","#0000EA","#0000EA",null,"#E50000",null,null,"#E50000",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000",null,null,null,null,null,null,null,null,null,null,null,null,null,"#FFFFFF",null,null,null,null,null,"#888888","#E4E4E4","#E4E4E4","#E4E4E4","#888888",null,"#888888",null,"#0083C7","#0000EA",null,null,null,"#0000EA","#0000EA",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#888888","#E4E4E4","#888888","#E4E4E4","#888888",null,null,null,"#0000EA","#0000EA",null,null,null,"#0000EA","#0000EA",null,null,null,null,null,null,null,null,null,null,null,null,null,"#02BE01","#02BE01",null,null,"#94E044","#94E044",null,null,null,null,null,null,null,null,"#E59500",null,"#FFFFFF",null,"#E59500",null,null,null,"#888888","#E4E4E4","#888888","#E4E4E4","#888888",null,null,null,"#0000EA","#0000EA","#0000EA",null,"#E50000",null,null,"#E50000",null,null,null,null,null,null,null,null,null,null,null,null,"#02BE01",null,null,null,null,"#94E044",null,null,null,null,null,null,null,null,null,null,"#E5D900",null,null,null,null,null,"#888888","#888888","#888888","#888888","#888888",null,null,null,"#0000EA",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#02BE01","#02BE01","#02BE01",null,null,null,null,"#94E044","#94E044","#94E044",null,null,null,null,"#FFFFFF",null,"#FFFFFF","#E5D900","#E5D900","#E5D900","#FFFFFF",null,"#FFFFFF",null,"#888888","#E4E4E4","#E4E4E4","#E4E4E4","#888888",null,null,null,"#820080",null,null,null,null,null,null,null,null,null,null,null,null,"#E50000","#E50000",null,null,null,null,null,null,null,null,"#E50000",null,"#E50000",null,null,null,null,null,null,null,null,null,null,"#E5D900",null,null,null,null,null,"#888888","#888888","#E4E4E4","#888888","#888888",null,null,null,"#820080",null,null,null,null,null,null,null,null,"#222222",null,null,null,"#E50000",null,null,null,null,null,null,"#E50000","#E50000",null,"#E50000","#E50000",null,null,null,null,null,null,null,null,null,"#E59500",null,"#02BE01",null,"#E5D900",null,null,null,"#888888","#888888","#E4E4E4","#888888","#888888",null,null,"#E50000","#820080",null,null,null,null,null,null,null,"#222222","#E59500",null,null,null,"#E50000","#E50000",null,"#E50000",null,"#E50000",null,"#E50000",null,null,"#E50000",null,null,null,null,null,null,null,null,null,null,null,"#94E044","#222222","#02BE01",null,null,null,null,"#888888","#888888","#E4E4E4","#888888","#888888",null,null,null,"#820080",null,null,null,null,null,null,"#222222","#A06A42","#E59500","#E59500",null,null,"#E50000",null,null,"#E50000","#E50000","#E50000",null,"#E50000","#E50000",null,null,"#E50000",null,null,null,"#222222",null,null,null,null,null,"#02BE01",null,"#02BE01",null,"#94E044",null,null,null,"#888888","#E4E4E4","#E4E4E4","#E4E4E4","#888888",null,null,null,"#A06A42",null,null,null,null,null,"#222222","#A06A42","#A06A42","#A06A42","#E59500","#E59500",null,null,null,null,null,null,null,null,null,null,"#E50000",null,null,null,null,null,null,null,null,null,null,"#E50000",null,"#02BE01",null,"#02BE01",null,"#E50000",null,null,"#888888","#888888","#888888","#888888","#888888",null,null,null,"#A06A42",null,null,null,null,"#222222","#E59500",null,null,null,null,"#222222","#E59500",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#0000EA",null,null,null,null,"#02BE01",null,"#E50000",null,"#A06A42",null,"#E50000",null,"#02BE01",null,null,null,null,null,null,null,null,null,"#A06A42",null,null,null,"#222222","#A06A42","#E59500","#E59500",null,null,"#222222","#A06A42","#E59500","#E59500",null,null,null,null,null,null,null,null,null,null,null,"#E50000",null,null,null,null,null,null,null,null,null,null,"#A06A42",null,null,null,null,null,null,null,null,null,null,null,null,null,"#A06A42",null,null,"#222222","#A06A42","#A06A42","#A06A42","#E59500","#E59500","#222222","#A06A42","#A06A42",null,"#E59500","#E59500",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#0000EA",null,null,null,null,"#A06A42","#A06A42","#A06A42","#A06A42","#A06A42",null,null,null,null,null,null,null,null,null,null,null,"#E50000",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E59500","#E59500","#E59500","#E59500","#E59500",null,null,null,null,null,null,null,null,null,null,null,"#E50000",null,null,null,null,null,null,"#222222","#222222","#222222","#222222",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000","#E50000",null,"#E50000","#E50000",null,null,null,"#E50000",null,null,null,null,"#222222","#222222","#E50000","#820080","#E50000","#820080","#222222","#222222",null,null,null,null,null,null,null,null,null,null,"#222222",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000",null,null,"#E50000",null,null,null,"#222222","#E50000","#E50000","#FFA7D1","#E50000","#820080","#E50000","#820080","#E50000","#222222",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000",null,null,"#E50000",null,null,null,"#222222","#E50000","#FFA7D1","#FFFFFF","#FFA7D1","#E50000","#820080","#E50000","#820080","#222222",null,null,null,null,null,"#E50000","#E50000","#E50000","#E50000","#E50000","#222222","#222222","#222222",null,null,null,null,null,null,"#820080","#820080",null,"#E5D900",null,null,null,null,null,"#E50000","#E50000","#E50000","#E50000","#E50000",null,null,null,"#222222",null,null,"#222222","#E50000","#E50000","#E50000","#FFA7D1","#E50000","#E50000","#E50000","#820080","#E50000","#820080","#222222",null,null,null,"#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000",null,null,null,null,null,null,"#820080","#820080",null,"#00D3DD",null,null,null,null,null,null,"#E50000","#E50000","#E50000","#E59500","#E59500",null,null,"#222222",null,null,"#222222","#E50000","#E50000","#E50000","#E50000","#222222","#222222","#E50000","#E50000","#820080","#E50000","#222222",null,null,null,"#A06A42","#A06A42","#A06A42","#E5D900","#E5D900","#222222","#E5D900","#222222","#222222","#222222",null,null,null,null,null,"#820080","#820080",null,null,null,null,null,null,null,null,null,"#E50000","#E59500","#E59500","#E59500","#E59500","#E59500","#E59500",null,null,"#222222","#222222","#E50000","#E50000","#222222","#FFFFFF","#888888","#222222","#820080","#E50000","#222222","#222222",null,null,"#A06A42","#E5D900","#A06A42","#E5D900","#E5D900","#E5D900","#222222","#E5D900","#E5D900","#E5D900","#222222",null,null,null,null,"#820080","#820080","#820080","#820080",null,null,null,null,null,null,null,null,null,"#E59500","#E59500","#222222","#E59500","#E59500","#E59500",null,null,"#222222","#FFFFFF","#222222","#222222","#222222","#888888","#888888","#222222","#222222","#222222","#888888","#222222",null,null,"#A06A42","#E5D900","#A06A42","#A06A42","#E5D900","#E5D900","#E5D900","#222222","#E5D900","#E5D900","#E5D900",null,null,null,null,null,null,null,null,null,null,null,"#A06A42",null,null,"#A06A42",null,null,null,"#E59500","#E59500","#222222","#E59500","#E59500",null,null,null,"#222222","#FFFFFF","#FFFFFF","#FFFFFF","#222222","#222222","#888888","#888888","#888888","#222222",null,null,null,null,"#A06A42","#E5D900","#E5D900","#E5D900","#E5D900","#222222","#222222","#222222","#222222","#222222",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E59500","#E59500","#E59500","#E59500","#E59500",null,null,null,"#222222","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#888888","#888888","#888888","#222222",null,null,null,null,null,"#E5D900","#E5D900","#E5D900","#E5D900","#E5D900","#E5D900",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E59500","#E59500","#E59500","#E59500","#E59500",null,null,"#E59500","#E59500",null,"#E59500","#E59500",null,null,null,null,"#222222","#222222","#E4E4E4","#888888","#888888","#888888","#222222","#222222",null,null,null,null,null,"#E50000","#E50000","#0000EA","#E50000","#E50000","#0000EA","#E50000","#E50000",null,null,null,"#222222","#222222","#222222","#222222","#222222","#222222","#222222","#222222",null,null,"#A06A42","#A06A42","#E59500","#E59500","#A06A42",null,"#E59500","#E59500","#E59500","#E59500",null,null,null,null,null,null,null,null,"#222222","#222222","#222222","#222222",null,null,null,null,null,null,"#E50000","#E50000","#E50000","#0000EA","#E50000","#E50000","#0000EA","#E50000","#E50000","#E50000",null,null,"#94E044","#94E044","#94E044","#94E044","#94E044","#94E044","#94E044","#94E044","#222222",null,"#A06A42","#A06A42","#A06A42","#E59500","#A06A42",null,"#E59500","#E59500","#A06A42","#A06A42","#A06A42",null,"#FFFFFF",null,"#222222",null,"#222222",null,"#222222",null,"#222222",null,"#222222",null,"#222222",null,null,"#E50000","#E50000","#E50000","#E50000","#0000EA","#0000EA","#0000EA","#0000EA","#E50000","#E50000","#E50000","#E50000",null,"#02BE01","#02BE01","#94E044","#02BE01","#02BE01","#94E044","#02BE01","#94E044","#222222",null,"#A06A42","#A06A42","#A06A42","#A06A42","#A06A42",null,"#E59500","#E59500","#A06A42","#222222","#A06A42","#A06A42",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"#E5D900","#E5D900","#E50000","#0000EA","#E5D900","#0000EA","#0000EA","#E5D900","#0000EA","#E50000","#E5D900","#E5D900","#222222","#222222","#222222","#222222","#222222","#222222","#222222","#222222","#222222","#222222",null,"#A06A42","#A06A42","#A06A42","#E59500","#A06A42",null,null,"#E59500","#A06A42","#A06A42","#222222","#A06A42","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000",null,null,null,null,"#E5D900","#E5D900","#E5D900","#0000EA","#0000EA","#0000EA","#0000EA","#0000EA","#0000EA","#E5D900","#E5D900","#E5D900",null,"#222222","#02BE01","#94E044","#02BE01","#94E044","#02BE01","#94E044","#222222",null,null,null,"#A06A42","#A06A42","#A06A42",null,null,"#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E5D900","#E50000","#E5D900","#E50000","#CF6EE4","#E50000","#E50000","#E50000","#E50000","#E50000",null,null,null,null,"#E5D900","#E5D900","#0000EA","#0000EA","#0000EA","#0000EA","#0000EA","#0000EA","#0000EA","#0000EA","#E5D900","#E5D900",null,"#222222","#02BE01","#94E044","#02BE01","#02BE01","#94E044","#94E044","#222222",null,null,null,null,"#E59500","#E59500","#E59500","#E59500","#E59500","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E5D900","#E5D900","#E5D900","#E50000","#CF6EE4","#E50000","#E50000","#E50000","#E50000","#E50000",null,null,null,null,null,null,"#0000EA","#0000EA","#0000EA","#222222","#222222","#0000EA","#0000EA","#0000EA",null,null,null,"#222222","#02BE01","#94E044","#02BE01","#94E044","#02BE01","#94E044","#222222",null,null,null,null,null,"#E59500","#E59500","#E59500","#E59500","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E5D900","#E50000","#E5D900","#E50000","#CF6EE4","#E50000","#E50000","#E50000","#E50000","#E50000",null,null,null,null,null,"#A06A42","#A06A42","#A06A42","#222222","#222222","#222222","#222222","#A06A42","#A06A42","#A06A42",null,null,"#222222","#02BE01","#94E044","#02BE01","#02BE01","#94E044","#94E044","#222222",null,null,null,null,null,null,"#222222","#222222","#222222","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000","#E50000",null,null,null,null,"#A06A42","#A06A42","#A06A42","#A06A42","#222222","#222222","#222222","#222222","#A06A42","#A06A42","#A06A42","#A06A42",null,"#222222","#02BE01","#94E044","#02BE01","#94E044","#02BE01","#94E044","#222222",null,null,null,null,null,null,null,null,null,"#222222","#E50000","#E50000","#E50000","#E50000"]}

// Dev
// const SERVERURL = "http://127.0.0.1:8000"
// const EVTIP = "127.0.0.1"

const PALETTE = [
                 '#FFFFFF', '#E4E4E4', '#888888', '#222222',
                 '#FFA7D1', '#E50000', '#E59500', '#A06A42',
                 '#E5D900', '#94E044', '#02BE01', '#00D3DD',
                 '#0083C7', '#0000EA', '#CF6EE4', '#820080',
                ];

var truncate = function (fullStr, strLen, separator) {
  if (!fullStr) { return undefined };
  if (fullStr.length <= strLen) return fullStr;

  separator = separator || '...';

  var sepLen = separator.length,
      charsToShow = strLen - sepLen,
      frontChars = Math.ceil(charsToShow/2),
      backChars = Math.floor(charsToShow/2);

  return fullStr.substr(0, frontChars) +
         separator +
         fullStr.substr(fullStr.length - backChars);
};

export class Index extends Component {
  constructor(props) {
    super(props);

    if (typeof window !== 'undefined') {
      this.dragStartSound = new Pizzicato.Sound("/static/dragstart.mp3");
      this.draggingSound = new Pizzicato.Sound("/static/dragging.mp3");
      this.dragStopSound = new Pizzicato.Sound("/static/dragend.mp3");
      this.dragFailSound = new Pizzicato.Sound("/static/dragfail.mp3");
    }

    this.EVTWrapper = new EVTWrapper({
      host: EVTIP,
    });

    this.state = {
      dragging: false,
      selection: {},
      currentMousePosition: {x: 0, y: 0, id: 0},
      pixels: this.initializePixels(),
      selectedColor: '',
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.onEsc, false);
    let privateKey =  localStorage.getItem('login');

    if (privateKey) {
      this.EVTWrapper = new EVTWrapper({privateKey});
    }

    (async () => {
      // let response = await fetch(SERVERURL + '/board', {
      // headers: {
      //   "Content-Type": "application/json"
      // },
      // method: "GET"
      // });

      // let body = await response.text();
      // body = JSON.parse(body);

      let body = CACHED_BOARD_RESPONSE;

      body.board.map((pixel, i) => {
        if (pixel) {
          this.state.pixels[i].color = pixel;
        } else {
          this.state.pixels[i].color = "#000";
        }
      });

      this.pixels = undefined;
      this.forceUpdate();

    })();

    const socket = io(SERVERURL);
    const app = feathers();
    app.configure(socketio(socket));

    app.service('board').on('status', message => {
      this.state.pixels[message.id].color = message.color;
      this.pixels = undefined;
      this.forceUpdate();
    });
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.onEsc, false);
  }

  onEsc = (event) => {
    if(event.keyCode === 27) {
      this.clearSelection();
    }
  }

  clearSelection = () => {
    this.state.selection.selected = false;
    this.pixels = undefined; //
    this.setState({
      selection: {},
      currentMousePosition: {x: 0, y: 0, id: 0},
    })
  }

  setMousePos = (pixel) => {
    this.setState({
      currentMousePosition: pixel
    });
  }

  selectPixel = async (pixel) => {
    // this.dragStopSound.play();

    // this.state.selection.selected = false;

    // this.setState({
    //   selection: pixel,
    //   selectedColor: pixel.color
    // })

    // pixel.selected = true;

    // await this.refreshPixel(pixel);

    // this.pixels = undefined; // force redraw

    // this.setState({
    //   pixels: this.state.pixels
    // })
  }

  refreshPixel = async (pixel) => {
    var {err, response} = await this.EVTWrapper.getToken("pixeltoken", pixel.id.toString());

    if (err != null && err.code === UNKNOWN_TOKEN_EXCEPTION) {
      pixel.available = true;
      pixel.color = "#000";
    } else if (err === null) {
      let colorMetas = response.metas
                      .filter(meta => meta.key.startsWith("color"))
                      .sort((a, b) => {
                        let bN = parseInt(b.key.replace("color", ""));
                        let aN = parseInt(a.key.replace("color", ""));
                        if (isNaN(bN)) {
                          return -1;
                        }
                        return bN - aN;
                      });

      pixel.owner = response.owner[0];

      if (colorMetas[0]) {
        pixel.color = colorMetas[0].value;
      }
    }
  }

  initializePixels = () => {
    var pixels = [];

    for(var y = 0; y < HEIGHT; y += 1) {
      for(var x = 0; x < WIDTH; x += 1) {
        var pixel = {x, y, color: "#000", id: ((y*WIDTH)+x).toString() };
        pixels.push(pixel);
      }
    }

    return pixels;
  }

  claimPixel = async (pixel) => {
    let response = await fetch(SERVERURL + '/claim', {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"id": pixel.id, "owner": this.EVTWrapper.publicKey}),
      method: "POST"
    });

    let body = await response.text();

    if (response.status === 201) {
      await this.refreshPixel(pixel);

      this.pixels = undefined; // force redraw

      this.setState({
        pixels: this.state.pixels
      })
    }
  }

  selectColor = async (color) => {
    this.state.selection.color = color;
    this.pixels = undefined; // force redraw
    this.setState({
      selectedColor: color
    });


    var {err, response} = this.commitColor(color, this.state.selection.id);
    if (err !== null) {
      // Unable to set the color.
    }
  }

  commitColor = async (color, pixelID) => {
    var {err, response} = await this.EVTWrapper.getToken("pixeltoken", pixelID);
    if (err !== null) {
      return {err, response}
    }

    let colorMetas = response.metas
                    .filter(meta => meta.key.startsWith("color"))
                    .map(meta => parseInt(meta.key.replace("color", "")))
                    .filter(index => !isNaN(index))
                    .sort((a, b) => b - a);

    let nextColorIndex = isNaN(colorMetas[0]+1) ? 0 : colorMetas[0]+1;

    var {err, response} = await this.EVTWrapper.addMeta("pixeltoken", this.state.selection.id, 'color'+nextColorIndex, color);
    if (err != null) {
      // Error setting meta.
    }

    // Let hte server refresh it's state too.
    await fetch(SERVERURL + '/board/'+pixelID.toString(), {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    });

    return {err, response}
  }

  handleLogin = (privateKey) => {
    this.EVTWrapper = new EVTWrapper({privateKey});
    localStorage.setItem('login', privateKey);
    this.forceUpdate();
  }

  handleLogout = () => {
    this.EVTWrapper = new EVTWrapper({});
    localStorage.removeItem('login');
    this.forceUpdate();
  }

  render() {
    this.pixels = this.pixels || this.state.pixels.map((pixel) => {
      return <div
        className={'pixel' + (pixel.selected ? ' selected' : '')}
        key={pixel.id}
        style={{
          backgroundColor: pixel.color,
          width:SCALE+"px",
          height: SCALE+"px",
          float: "left",
          color: pixel.color,
          fontSize: "14px"
        }}
        onMouseEnter={this.setMousePos.bind(this,pixel)}
        onClick={this.selectPixel.bind(this,pixel)}
      ></div>
    });


    return <div className="main">
      <Header
        onLogin={this.handleLogin}
        onLogout={this.handleLogout}
        loggedIn={truncate(this.EVTWrapper.publicKey, 25, "...")}
        EVTWrapper={this.EVTWrapper}
      />

      <div className="main">
        <div className="pixels">
          {
            this.pixels
          }
          <style jsx>
            {`
              .pixels {
                float: left;
                margin-right: 10px;
                width: ${SCALE * WIDTH}px;
                border: 1px solid #222;
                margin-bottom: 20px;
              }
            `}
          </style>
        </div>

        <div className="controls">
          <div className={"selection" + (this.state.selection.x !== undefined ? " selected" : "")} >

            <h2>
              {
                (this.state.selection.x !== undefined) ?
                <div>
                  Pixel #{this.state.selection.id}
                </div>
                :
                <span>Pixel #{this.state.currentMousePosition.id}&nbsp;</span>
              }
            </h2>
            {
              (this.state.selection.x !== undefined) ?
                <div>({this.state.selection.x},{this.state.selection.y})</div>
                :
              <div>({this.state.currentMousePosition.x},{this.state.currentMousePosition.y})</div>
            }

            {
              (this.state.selection.x !== undefined) ?
              <div className="owner">
                <br/>
                <span>
                  {
                    this.state.selection.owner === undefined ?
                      <div>

                      </div>
                      :
                      "Owner: " + truncate(this.state.selection.owner, 25, "...")
                  }
                </span>
              </div>
              :
              ''
            }
          </div>

          <hr/>
          {
            this.state.selection.color ?
              this.state.selection.owner === undefined ?
                <div className="detail-box">
                  <h2>Nobody owns this pixel yet!</h2>
                  <p>You can claim it for yourself and set it to any color you want!</p>
                  {
                    this.EVTWrapper.publicKey ?
                      <button className="primary" onClick={this.claimPixel.bind(this, this.state.selection)}>CLAIM PIXEL</button>
                    :
                      <div>Click login above or create account to claim this pixel!<br/><br/></div>
                  }

                  <button className="secondary" onClick={this.clearSelection}>DESELECT [ESC]</button>
                </div>
              :
                this.state.selection.owner === this.EVTWrapper.publicKey ?
                  <div>
                    You own this pixel!
                    <div className="palette">
                      {PALETTE.map((color) => {
                        var className = 'color-picker';
                        if (color === this.state.selectedColor) {
                          className += ' selected'
                        }
                        return <div key={color} className={className} style={{backgroundColor:color}} onClick={this.selectColor.bind(this, color)}></div>
                      })}
                    </div>
                  </div>
                :
                  <div>
                    {this.EVTWrapper.publicKey ? "Someone else owns this pixel." : "You are not logged in"} <br /><br />
                    <button className="secondary" onClick={this.clearSelection}>DESELECT [ESC]</button>
                  </div>
            :
            ""
          }

          <style jsx>
            {`
              .controls {
                float: left;
                color: #fff;
                font-size: 16px;
                width: 400px;
              }

              .selected {
                color: #fff !important
              }

              .selectionPreview {
                width: 100px;
                height: 100px;
                border: 1px solid #222222;
                float: left;
                margin-right: 20px;
                margin-bottom: 10px;
              }

              .color-picker {
                width: 20px;
                height: 20px;
                float: left;
                display: box;
                cursor: pointer;
                margin-right: 2px;
                opacity: 0.8;
              }

              .color-picker:hover, .color-picker.selected {
                border-bottom: 4px solid #fff;
                opacity: 1;
              }

              .palette {
                margin-top: 10px
              }

              .selection {
                color: #858585;
              }

              h2 {
                font-size: 16px;
                margin: 0;
                margin-bottom: 10px;
              }

              hr {
                clear: both;
                border-color: #222
              }

              .owner span {

              }

              .detail-box {
                font-family: system, -apple-system, system-ui;
                color: #aaa;
              }

              .detail-box h2 {
                color: #fff
              }
            `}
          </style>

        </div>
        <div className="caption">
        <span>Attention:</span> everiPixel has been archived. This is now a static view of the board after getting some engagement during the hackathon. All features have been disabled.
        </div>

        <div className="explanation">
          <h2>Archive notice</h2>
          <p>This site is now an archive of the everiPixel hackathon entry. The text below is kept as it was while the site was operational.</p>
        </div>

        <div className="explanation">
          <h2>What is this?</h2>
          <p>everiPixel is a demonstration of the <a href="https://everitoken.io/">everiToken</a> blockchain and its <a href="https://www.everitoken.io/developers/key_concepts/non-fungible_tokens_and_domains">Non Fungible Token</a> feature.</p>
          <p>Above is a canvas of 50x50 pixels, each of which can be owned and transfered individually.</p>
          <p>Currently pixels can be claimed freely by anyone and set to any color you want.</p>
          <p>Transfering pixels to someone else is possible, but requires knowledge of everitoken's API. I do have plans to facilitate that via the UI in a future release.</p>
          <p>It is currently running against a self hosted single node of the blockchain at 35.240.176.101. Though the intention is to move it to the mainnet eventually.</p>


          <h2>Why did you make this?</h2>
          <p>This project was made to help myself and others understand features of the blockchain better.</p>
          <p>I always learn best when I have a hands on way to play with the concepts I am learning. Hopefully this also helps others in that way.</p>

          <p>I made it for everiToken's global hackathon in 2018.</p>
          <p>It was submitted to the Open Challenge, which was to "Build anything related to the everiToken public chain."</p>

          <h2>What is the future for this project?</h2>
          <p>Currently, you'd have to be a bit technical and know everiToken's API before you would be able to transfer a pixel to someone else.</p>
          <p>So I plan to implement ways to easily transfer, sell, and auction pixels</p>

          <p>The canvas itself can be improved as well, my ambition is to get a 1000x1000 pixel canvas, though that might require
          some more cooperation with the everiToken team.</p>
        </div>
      </div>
    </div>
  }
}

export default Index
