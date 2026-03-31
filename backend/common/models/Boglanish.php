<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "boglanish".
 *
 * @property int $id
 * @property string $appname
 * @property string $malumoti
 * @property string $appimg
 */
class Boglanish extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'boglanish';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['appname', 'malumoti', 'appimg'], 'required'],
            [['appimg'], 'string'],
            [['appname'], 'string', 'max' => 70],
            [['malumoti'], 'string', 'max' => 130],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'appname' => 'Appname',
            'malumoti' => 'Malumoti',
            'appimg' => 'Appimg',
        ];
    }

    /**
     * {@inheritdoc}
     * @return BoglanishQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new BoglanishQuery(get_called_class());
    }

}
