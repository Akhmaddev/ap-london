<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Qism $model */

$this->title = 'Update Qism: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Qisms', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="qism-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
