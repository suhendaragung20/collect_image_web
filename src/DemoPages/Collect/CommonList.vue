<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div class="card main-card mb-3">
            <div class="card-header">8 images collected</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm">
                        <div class="h-200p">
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/eye1.png" width="100%">
                                <p>Cataract</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/eye2.png" width="100%">
                                <p>Normal</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/eye3.png" width="100%">
                                <p>Uveitis</p>
                            </div>
                        </div>
                        <div class="table-wrap mt-40">

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitle.vue";

    export default {
        components: {
            PageTitle,
        },
        data: () => ({
            heading: 'Common Camera',
            subheading: 'List data image yang diambil melalui kamera smartphone.',
            icon: 'pe-7s-albums icon-gradient bg-deep-blue',
        }),
    }
</script>
