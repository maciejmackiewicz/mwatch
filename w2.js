var _0xb18b=["\x63\x61\x6E\x76\x61\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x68\x65\x69\x67\x68\x74","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65","\x73\x72\x63","\x30\x30\x31\x2E\x70\x6E\x67","\x30\x30\x32\x71\x2E\x70\x6E\x67","\x30\x30\x33\x71\x2E\x70\x6E\x67","\x73\x65\x6B\x75\x6E\x64\x6F\x77\x61\x2E\x70\x6E\x67","\x61\x6C","\x64\x72\x61\x77\x49\x6D\x61\x67\x65","\x67\x65\x74\x48\x6F\x75\x72\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73","\x50\x49","\x62\x65\x67\x69\x6E\x50\x61\x74\x68","\x6C\x69\x6E\x65\x57\x69\x64\x74\x68","\x6C\x69\x6E\x65\x43\x61\x70","\x72\x6F\x75\x6E\x64","\x6D\x6F\x76\x65\x54\x6F","\x72\x6F\x74\x61\x74\x65","\x6C\x69\x6E\x65\x54\x6F","\x73\x74\x72\x6F\x6B\x65","\x66\x6F\x6E\x74","\x70\x78\x20\x61\x72\x69\x61\x6C","\x74\x65\x78\x74\x42\x61\x73\x65\x6C\x69\x6E\x65","\x6D\x69\x64\x64\x6C\x65","\x74\x65\x78\x74\x41\x6C\x69\x67\x6E","\x63\x65\x6E\x74\x65\x72","\x66\x69\x6C\x6C\x54\x65\x78\x74","\x61\x72\x63","\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65","\x77\x68\x69\x74\x65","\x66\x69\x6C\x6C","\x63\x72\x65\x61\x74\x65\x52\x61\x64\x69\x61\x6C\x47\x72\x61\x64\x69\x65\x6E\x74","\x23\x33\x33\x33","\x61\x64\x64\x43\x6F\x6C\x6F\x72\x53\x74\x6F\x70","\x73\x74\x72\x6F\x6B\x65\x53\x74\x79\x6C\x65"];var canvas=document[_0xb18b[1]](_0xb18b[0]);var ctx=canvas[_0xb18b[3]](_0xb18b[2]);var radius=canvas[_0xb18b[4]]/2;ctx[_0xb18b[5]](radius,radius);radius=radius*0.90;var iob= new Image();iob[_0xb18b[6]]=_0xb18b[7];var bh= new Image();bh[_0xb18b[6]]=_0xb18b[8];var sh= new Image();sh[_0xb18b[6]]=_0xb18b[9];var sec= new Image();sec[_0xb18b[6]]=_0xb18b[10];setInterval(drawClock,1000);function al(){alert(_0xb18b[11])}function drawClock(){ctx[_0xb18b[12]](iob,-425,-425);drawTime(ctx,radius);}function drawTime(ctx,radius){var _0x33f0xb= new Date();var _0x33f0xc=_0x33f0xb[_0xb18b[13]]();var _0x33f0xd=_0x33f0xb[_0xb18b[14]]();var _0x33f0xe=_0x33f0xb[_0xb18b[15]]();_0x33f0xc=_0x33f0xc%12;_0x33f0xc=(_0x33f0xc*Math[_0xb18b[16]]/6)+(_0x33f0xd*Math[_0xb18b[16]]/(6*60))+(_0x33f0xe*Math[_0xb18b[16]]/(360*60));drawSmall(ctx,_0x33f0xc+2.2333333333333333,radius*0.5,radius*0.07);_0x33f0xd=(_0x33f0xd*Math[_0xb18b[16]]/30)+(_0x33f0xe*Math[_0xb18b[16]]/(30*60));drawBig(ctx,_0x33f0xd+3.28333333333333,radius*0.8,radius*0.07);_0x33f0xe=(_0x33f0xe*Math[_0xb18b[16]]/30);drawHand(ctx,_0x33f0xe,radius*0.9,radius*0.01);}function drawHand(ctx,_0x33f0x10,_0x33f0x11,_0x33f0x12){ctx[_0xb18b[17]]();ctx[_0xb18b[18]]=_0x33f0x12;ctx[_0xb18b[19]]=_0xb18b[20];ctx[_0xb18b[21]](0,0);ctx[_0xb18b[22]](_0x33f0x10);ctx[_0xb18b[23]](0,-_0x33f0x11);ctx[_0xb18b[12]](sec,-425,-425);ctx[_0xb18b[22]](-_0x33f0x10);}function drawBig(ctx,_0x33f0x10,_0x33f0x11,_0x33f0x12){ctx[_0xb18b[17]]();ctx[_0xb18b[18]]=_0x33f0x12;ctx[_0xb18b[19]]=_0xb18b[20];ctx[_0xb18b[21]](0,0);_0x33f0x10+=3;ctx[_0xb18b[22]](_0x33f0x10);ctx[_0xb18b[12]](bh,-425,-425);ctx[_0xb18b[22]](-_0x33f0x10);}function drawSmall(ctx,_0x33f0x10,_0x33f0x11,_0x33f0x12){ctx[_0xb18b[17]]();ctx[_0xb18b[18]]=_0x33f0x12;ctx[_0xb18b[19]]=_0xb18b[20];ctx[_0xb18b[21]](0,0);_0x33f0x10+=3;ctx[_0xb18b[22]](_0x33f0x10);ctx[_0xb18b[12]](sh,-425,-425);ctx[_0xb18b[22]](-_0x33f0x10);}function drawNumbers(ctx,radius){var _0x33f0x16;var _0x33f0x17;ctx[_0xb18b[25]]=radius*0.15+_0xb18b[26];ctx[_0xb18b[27]]=_0xb18b[28];ctx[_0xb18b[29]]=_0xb18b[30];for(_0x33f0x17=1;_0x33f0x17<13;_0x33f0x17++){_0x33f0x16=_0x33f0x17*Math[_0xb18b[16]]/6;ctx[_0xb18b[22]](_0x33f0x16);ctx[_0xb18b[5]](0,-radius*0.85);ctx[_0xb18b[22]](-_0x33f0x16);ctx[_0xb18b[31]](_0x33f0x17.toString(),0,0);ctx[_0xb18b[22]](_0x33f0x16);ctx[_0xb18b[5]](0,radius*0.85);ctx[_0xb18b[22]](-_0x33f0x16);};}function drawFace(ctx,radius){var _0x33f0x19;ctx[_0xb18b[17]]();ctx[_0xb18b[32]](0,0,radius,0,2*Math[_0xb18b[16]]);ctx[_0xb18b[33]]=_0xb18b[34];ctx[_0xb18b[35]]();_0x33f0x19=ctx[_0xb18b[36]](0,0,radius*0.95,0,0,radius*1.05);_0x33f0x19[_0xb18b[38]](0,_0xb18b[37]);_0x33f0x19[_0xb18b[38]](0.5,_0xb18b[34]);_0x33f0x19[_0xb18b[38]](1,_0xb18b[37]);ctx[_0xb18b[39]]=_0x33f0x19;ctx[_0xb18b[18]]=radius*0.1;ctx[_0xb18b[24]]();ctx[_0xb18b[17]]();ctx[_0xb18b[32]](0,0,radius*0.1,0,2*Math[_0xb18b[16]]);ctx[_0xb18b[33]]=_0xb18b[37];ctx[_0xb18b[35]]();}
