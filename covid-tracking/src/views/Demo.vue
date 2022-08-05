<template>
    <div>
        <h1>Demo Page</h1>
        <button 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        I'm blue
        </button>
        <button 
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
        Now I'm red
        </button>
    </div>
</template>

<script>
export default {
    name: 'Demo',
    components: {
    },
    data(){
        return {
            buttonAppreance: true,
        }
    },
    methods: {
        color(event){
            this.buttonAppreance = !this.buttonAppreance;
        }
    }
}
</script>