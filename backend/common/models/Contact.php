<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "contact".
 *
 * @property int $id
 * @property string $kattayozuv
 * @property string $yozuvcha
 * @property string $logoimg
 */
class Contact extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'contact';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['kattayozuv', 'yozuvcha', 'logoimg'], 'required'],
            [['logoimg'], 'string'],
            [['kattayozuv'], 'string', 'max' => 70],
            [['yozuvcha'], 'string', 'max' => 80],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'kattayozuv' => 'Kattayozuv',
            'yozuvcha' => 'Yozuvcha',
            'logoimg' => 'Logoimg',
        ];
    }

    /**
     * {@inheritdoc}
     * @return ContactQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new ContactQuery(get_called_class());
    }

}
