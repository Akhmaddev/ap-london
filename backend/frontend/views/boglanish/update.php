<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Boglanish $model */

$this->title = 'Update Boglanish: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Boglanishes', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="boglanish-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
