<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Topcenter $model */

$this->title = 'Create Topcenter';
$this->params['breadcrumbs'][] = ['label' => 'Topcenters', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="topcenter-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
