<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Menyu $model */

$this->title = 'Update Menyu: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Menyus', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="menyu-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
