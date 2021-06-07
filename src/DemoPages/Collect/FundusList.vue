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
                              <img src="../../assets/images/eyes/0_left.jpg" width="100%">
                                <p>Normal</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/0_right.jpg" width="100%">
                                <p>Glaucoma</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/1_left.jpg" width="100%">
                                <p>Diabetes</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/1_right.jpg" width="100%">
                                <p>Cataract</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/2_right.jpg" width="100%">
                                <p>AMD</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/4_left.jpg" width="100%">
                                <p>Hypertensi</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/3_left.jpg" width="100%">
                                <p>Others</p>
                            </div>
                            <div class="font-icon-wrapper font-icon-lg">
                              <img src="../../assets/images/eyes/5_left.jpg" width="100%">
                                <p>Myopia</p>
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
