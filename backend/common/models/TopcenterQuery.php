<?php

namespace common\models;

/**
 * This is the ActiveQuery class for [[Topcenter]].
 *
 * @see Topcenter
 */
class TopcenterQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return Topcenter[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return Topcenter|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
