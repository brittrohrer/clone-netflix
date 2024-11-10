<script setup>
import {ref} from "vue";
import {users} from "../public/js/profiles.js"
/* use variable that can be changed and create web content dynamically */


</script>
<template>
    <div>
        <nav class="profile-nav">
            <div class="profile-nav__container">
                <ul class="profile-nav__list">
                    <li class="profile-nav__item"
                        v-for="user in users" :key="user.name">
                        <NuxtLink class="profile-nav__link" to="/user">
                            <i :class="user.pic" class="profile-nav__profile-icon"></i>
                            <p class="profile-nav__profile-name">{{user.name}}</p>
                        </NuxtLink>
                    </li>
                    <li class="profile-nav__item">
                        <a class="profile-nav__link" href="#">
                            <img class="profile-nav__kids-profile-img" src="https://framerusercontent.com/images/80wTfRqDaVd40L7GcaKTv0I9o.png">
                            <p class="profile-nav__profile-name">Kids</p>
                        </a>
                    </li>
                    <li class="profile-nav__item">
                        <a class="profile-nav__link" href="#">
                            <i class="fa-solid fa-circle-plus profile-nav__profile-icon add-profile"></i>
                            <p class="profile-nav__profile-name">Add Profile</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style scoped>
</style>