<script setup>
import {myList} from '../public/js/project-data.js';
</script>

<template>
    <div class="section">
        <div class="section__container">
            <div class="section__header">
                <h3 class="section__title">My List</h3>
            </div>
            <div class="view-all">
                <ul class="video-list view-all__list">
                    <li class="video-list-item"
                        v-for="video in myList"
                        :key="video.title">
                        <VideoCard
                        :thumbnail="video.thumbnail"
                        :rating="video.rating"
                        :time="video.time"
                        :genre="video.genre"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>