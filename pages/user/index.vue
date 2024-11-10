<script setup>
import { ref } from 'vue';
import {movieList, myList, watchingList,showsList,fullList} from '../public/js/project-data.js';
</script>


<template>
    <div>
        <section class="feature">
            <img :src="fullList[0].featurepic" class="feature__img">
            <div class="feature__text-container">
                <h2 class="feature__title">{{ fullList[0].title }}</h2>
                <p class="feature__description">{{ fullList[0].description }}</p>
                <div class="feature__buttons-section">
                    <div class="feature__button-container feature__button-container--play">
                        <i class="fa-solid fa-play feature__icon feature__icon--play"></i>
                        <p class="feature__icon-text feature__icon-text--play">Play</p>
                    </div>
                    <div class="feature__button-container feature__button-container--info">
                        <i class="fa-solid fa-info feature__icon feature__icon--info"></i>
                        <p class="feature__icon-text feature__icon-text--info">More Info</p>
                    </div> 
                </div>
            </div>
        </section>
        <div class="section__container">
            <section class="user-home-page-section my-list">
                <div class="section__header">
                    <h3 class="section__title">My List</h3>
                    <NuxtLink class="section__explore-link" to="/mylist">Explore All</NuxtLink>
                </div>
                <div>
                    <ul class="video-list">
                        <li class="video-list-item"
                            v-for="video in myList"
                            :key="video.title">
                            <VideoCard
                            :thumbnail="video.thumbnail"
                            :rating="video.rating"
                            :time="video.time"
                            :seasons="video.seasons"
                            :genre="video.genre"
                            />
                        </li>
                    </ul>
                </div>
            </section>
            <section class="user-home-page-section continue">
                <div class="section__header">
                    <h3 class="section__title">Continue Watching</h3>
                    <NuxtLink class="section__explore-link" to="/user1">Explore All</NuxtLink>
                </div>
                <div>
                    <ul class="video-list">
                        <li class="video-list-item"
                            v-for="video in watchingList"
                            :key="video.title">
                            <VideoCard
                            :thumbnail="video.thumbnail"
                            :rating="video.rating"
                            :time="video.time"
                            :seasons="video.seasons"
                            :genre="video.genre"
                            />
                        </li>
                    </ul>
                </div>
            </section>
            <section class="user-home-page-section movies">
                <div class="section__header">
                    <h3 class="section__title">Movies</h3>
                    <NuxtLink class="section__explore-link" to="/movies">Explore All</NuxtLink>
                </div>
                <div>
                    <ul class="video-list">
                        <li class="video-list-item"
                            v-for="video in movieList"
                            :key="video.title">
                            <VideoCard
                            :thumbnail="video.thumbnail"
                            :rating="video.rating"
                            :time="video.time"
                            :seasons="video.seasons"
                            :genre="video.genre"
                            />
                        </li>
                    </ul>
                </div>
            </section>
            <section class="user-home-page-section shows">
                <div class="section__header">
                    <h3 class="section__title">TV Shows</h3>
                    <NuxtLink class="section__explore-link" to="/shows">Explore All</NuxtLink>
                </div>
                <div>
                    <ul class="video-list">
                        <li class="video-list-item"
                            v-for="video in showsList"
                            :key="video.title">
                            <VideoCard
                            :thumbnail="video.thumbnail"
                            :rating="video.rating"
                            :time="video.time"
                            :seasons="video.seasons"
                            :genre="video.genre"
                            />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>