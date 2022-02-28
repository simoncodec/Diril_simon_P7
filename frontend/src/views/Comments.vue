<template>
    <div class="Comments">
    <NavBar />
    <div class="post-comment">
        <v-card class="post-card" >
            <v-card-title class="title-card">
                <span><img alt="logo groupomania" src="../assets/icon2.png"/></span>
            </v-card-title>
            <div class="postContent">
                <v-card-text>{{post.content}}</v-card-text>
                <v-img :src="post.attachment" contain max-height="200" max-width="200" class="gifPost"></v-img>
            </div>
            <v-card-actions class="footerPost">
                <v-list-item class="grow">
                    <v-list-item-content>
                        <!-- <p class="h6">{{post.username}}</p> -->
                    </v-list-item-content>
                </v-list-item>
            </v-card-actions>
        </v-card>
        <v-container>
            <v-timeline dense clipped>
                <v-timeline-item fill-dot class="white--text mb-12" color="#ea8685" large>
                    <template v-slot:icon>
                        <span></span>
                    </template>
                    <v-text-field v-model="comment.content" :rules="commentRules" hide-details flat label="Postez un commentaire..." solo @keydown.enter="comment">
                        <template v-slot:append>
                            <v-btn class="mx-0" depressed @click="postComment">Comment</v-btn>
                        </template>
                    </v-text-field>
                </v-timeline-item>
                <v-timeline-item v-for="(comment, index) in comments" :key="comment.id" class="mb-4" color="grey" icon-color="grey lighten-2" small>
                    <v-row justify="space-between">
                        <v-col> {{comment.User.username}}.</v-col>
                        <v-col> {{comment.content}}.</v-col>
                        <v-col><v-icon v-if="getUser.username == comment.User.username || getUser.isAdmin == 1" @click="deleteComment(comment.id, index)" class="btnAction"> mdi-trash-can-outline </v-icon></v-col>
                    </v-row>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapGetters } from "vuex";
export default {
    name: "Comments",
    components: {
        NavBar,
    },
    data() {
        return {
            post:{
                content: "",
            },
            comment:{
                content: "",
            },
            comments: [],
        };
    },
    computed: {
    ...mapGetters(["getUser"], ["getToken"]),
    },
    mounted (){
        const request = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + this.$store.getters.getToken,
        },
    };
    fetch(
        "http://localhost:3000/api/messages/:postId/" + this.$route.params.PostId , request)
            .then((response) => response.json())
            .then((data) => {
            this.post = data;
        });
        const requestComment = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + this.$store.getters.getToken,
        },
    };
    fetch("http://localhost:3000/api/posts/" + this.$route.params.PostId + "/comments", requestComment)
        .then((response) => response.json())
        .then((data) => {
            this.comments = data;
        });
    },
    methods: {
        postComment() {
        const body = JSON.stringify(this.comment)
        const request = {
            method: "POST",
                headers: {
                authorization: "Bearer " + this.$store.getters.getToken,
                "Content-Type": "application/json",
            },
            body: body,
        };
        fetch("http://localhost:3000/api/posts/" + this.$route.params.PostId + "/comments", request)
            .then((response) => response.json())
            .then(() => { 
                this.$router.go("/Comments");
            });
        },
        deleteComment (commentId, index) {
        const request = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer " + this.$store.getters.getToken,
            },
        };
        fetch("http://localhost:3000/api/posts/" + this.$route.params.PostId + "/comments/" + commentId, request )
            .then(() => {
            this.comments.splice(index, 1)
        })
    }
    }
};
</script>

<style lang="scss" scoped>
.Comments{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    .post-comment{
        width: 70%;
        .post-card {
            height: 350px;
            margin:20px;
            .postContent{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            img {
                height: 30px;
                width: 30px;
                vertical-align: bottom;
            } 
        }
    }
}
.title-card{
    justify-content: space-between;
}
.postContent{
    font-size: large;
    font-weight: bold;
}
@media (min-width: 320px) and (max-width: 426px) {
    .Comments{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .post-comment{
            width: 100%;
        }
    }
}
</style>