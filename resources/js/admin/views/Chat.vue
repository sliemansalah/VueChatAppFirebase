<template>
  <div class="home">
   <div class="container">
     <br>
     <p>User Email: <span class="text-primary">{{ authUser }}</span></p>
    <button @click="logout" class="btn btn-danger">Logout</button>
<h3 class=" text-center">Messaging</h3>
<div v-if="loading" class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
          </div>
          <div class="inbox_chat">
            <div class="chat_list active_chat">
              <div @click="showOurMsg" class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5> {{ message_from}}
                    <span v-if="msgNotReadCount>0" class="badge badge-danger">
                      {{ msgNotReadCount }}
                    </span>
                    </h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showMsgs" class="mesgs">
          <div class="msg_history">
            <div v-for="(message,key) in messages" :key="key" 
            :class="[message.author === authUser?'sent_msg': 'received_msg']">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <input @keydown.enter="editMe(message,$event)" v-if="isEdit && key == editKey" type="text" 
                  v-model="message.message">
                  <div v-else>
                   <p>{{ message.message }}</p>
                  <i v-if="authUser == message.author" @click="remove(message)" class="fa fa-trash"></i>
                    <i v-if="authUser == message.author" @click="edit(message,key)" class="fa fa-pencil"></i>
                  </div>
                  <span class="time_date">{{message.author}}</span></div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input @keyup.enter="saveMessage" v-model="message" type="text" class="write_msg" placeholder="Type a message" />
              <button @click="saveMessage" class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
            
    </div>
    <div v-else>
      <br>
      <h3 class="text-danger text-center">Loading ...</h3>
    </div>
    </div>

  </div>



</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      editKey:0,
      msgNotReadCount:0,
      loading:false,
      message:null,
      showMsgs:false,
      messages: [],
      authUser: '',
      message_from:'Test User',
      isEdit:false,
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('user');
      this.$router.replace('/login')
    },
    saveMessage(){
        this.msgNotReadCount = 0;
      // save to firestore
      db.collection('chat').add({
        message:this.message,
        author: this.authUser,
        id:null,
        read:false,
        createdAt: new Date()
      }).then(function(docRef) {
        db.collection('chat').doc(docRef.id).update({
          id: docRef.id
        })
})
      this.message = null;
      this.showOurMsg();
    },
    fetchMessages(){
    db.collection('chat').orderBy('createdAt').onSnapshot((querySnapshot) => {
      let allMessages = [];
      querySnapshot.forEach(doc => {
        allMessages.push(doc.data());
      });
              this.msgNotReadCount = 0;
      allMessages.forEach(msg => {
        if(msg.author !== this.authUser) {
          this.message_from = msg.author;
          !msg.read? this.msgNotReadCount++:null
        }
      });
      this.messages = allMessages;
      this.loading=true;
    });
  },
  remove(m){
        db.collection('chat').doc(m.id).delete()
        .then(_=> {
          console.log('Deleted successfully');
        })
  },
  edit(m,key){
    this.isEdit = true;
    this.editKey = key
  },
  editMe(m,e) {
db.collection('chat').doc(m.id).update({
          message:e.target.value
        })
        .then(_=> {
          this.isEdit = false;
                   console.log('Updated successfully');
        })
  },
  showOurMsg() {
    this.showMsgs= true;
    this.messages.forEach(msg => {
        if(msg.author !== this.authUser) {
          this.msgNotReadCount = 0;
           db.collection('chat').doc(msg.id).update({
             read:true
           })
        .then(_=> {
          console.log('Message Read Update');
        })
        }
      });
  }
  },
  created(){
    this.fetchMessages()
  },
  mounted(){
    this.authUser = localStorage.getItem('user');
  }
};
</script>

<style scoped>
.container{max-width:1170px; margin:auto;}
img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%; 
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { height: 550px; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 54%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>
