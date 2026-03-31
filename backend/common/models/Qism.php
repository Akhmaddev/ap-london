<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "qism".
 *
 * @property int $id
 * @property string $ism
 * @property string $malumot
 * @property string $sana
 */
class Qism extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'qism';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['ism', 'malumot', 'sana'], 'required'],
            [['malumot'], 'string'],
            [['ism'], 'string', 'max' => 80],
            [['sana'], 'string', 'max' => 40],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'ism' => 'Ism',
            'malumot' => 'Malumot',
            'sana' => 'Sana',
        ];
    }

    /**
     * {@inheritdoc}
     * @return QismQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new QismQuery(get_called_class());
    }

}
