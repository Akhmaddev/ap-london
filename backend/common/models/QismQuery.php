<?php

namespace common\models;

/**
 * This is the ActiveQuery class for [[Qism]].
 *
 * @see Qism
 */
class QismQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return Qism[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return Qism|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
