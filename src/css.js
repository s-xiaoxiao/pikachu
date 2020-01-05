const string = `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #ffe600;
}
.skin {
  position: relative;
  background: #ffe600;
  min-height: 100vh;
}
.nose {
  position: relative;
  width: 0px;
  height: 0px;
  border: 10px solid red;
  border-color: black transparent transparent transparent;
  left: 50%;
  top: 144px;
  margin-left: -10px;
  z-index: 1;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(8deg);
  }
  75% {
    transform: rotate(-8deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  animation: wave 300ms infinite linear;
}
.yuan {
  position: relative;
  border-radius: 10px 10px 0 0;
  height: 6px;
  width: 20px;
  top: -16px;
  margin-left: -10px;
  background: black;
}
.eye {
  border: 2px solid #0a0000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  border-radius: 50%;
  background: #2e2d2e;
}
.eye::before {
  content: "";
  display: block;
  border: 2px solid #000;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fffeff;
  position: relative;
  left: 11px;
  top: -1px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  /* border: 1px solid red; */
  width: 160px;
  height: 200px;
  position: relative;
  left: 50%;
  top: 138px;
  margin-left: -80px;
}
@keyframes tongueOut {
  0% {
    top: -340px;
  }
  25% {
    top: -330px;
  }
  75% {
    top: -320px;
  }
  100% {
    top: -340px;
  }
}
.tongue:hover {
  animation: tongueOut 600ms 1;
}
.mouth .up {
  min-width: 100%;
  min-height: 30px;
  position: relative;
  z-index: 1;
}
.mouth .up .lip {
  height: 30px;
  width: 80px;
  border: 3px solid black;
  border-bottom-color: transparent;
  border-top-color: transparent;
  position: absolute;
}
.mouth .up .lip.left {
  border-right-color: transparent;
  border-radius: 0 0 0 50px;
  transform: rotate(-28deg) translateX(2px);
}
.mouth .up .lip.right {
  left: 50%;
  border-left-color: transparent;
  border-radius: 0 0 50px 0;
  transform: rotate(28deg) translateX(-2px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  position: relative;
  background: #ffe600;
  height: 27px;
  width: 74px;
  top: -3px;
}
.mouth .up .lip.left::before {
  border-radius: 0 0 0 50px;
}

.mouth .up .lip.right::before {
  border-radius: 0 0 50px 0;
}
.mouth .down {
  position: relative;
  top: -20px;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.mouth .down .tongue {
  content: "";
  display: block;
  border: 3px solid black;
  position: relative;
  top: -340px;
  width: 128px;
  margin: 0 auto;
  height: 500px;
  background: #6b000a;
  border-radius: 0 0 100% 100%;
  overflow: hidden;
}
.mouth .down .tongue::before {
  content: "";
  display: block;
  border: 3px solid #ff4760;
  position: absolute;
  top: 375px;
  left: -3px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: #ff4760;
}
.face {
  border: 3px solid black;
  left: 50%;
  top: 200px;
  position: absolute;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin-left: -44px;
  background: #ff1800;
}
.face > img {
  position: absolute;
  top: 50%;
  left: 50%;
}
.face.left {
  transform: translate(-150px);
}
.face.left > img {
  transform: rotateY(180deg);
  transform-origin: top left;
}
.face.right {
  transform: translate(150px);
}
`;
export default string;
