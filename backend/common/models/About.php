<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "about".
 *
 * @property int $id
 * @property string $nom
 * @property string $malumotlari
 * @property string $kaferasmi
 */
class About extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'about';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['nom', 'malumotlari', 'kaferasmi'], 'required'],
            [['malumotlari', 'kaferasmi'], 'string'],
            [['nom'], 'string', 'max' => 70],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'nom' => 'Nom',
            'malumotlari' => 'Malumotlari',
            'kaferasmi' => 'Kaferasmi',
        ];
    }

    /**
     * {@inheritdoc}
     * @return AboutQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new AboutQuery(get_called_class());
    }

}
