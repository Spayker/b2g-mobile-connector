package com.h2gm.activity;


import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import androidx.test.ext.junit.rules.ActivityScenarioRule;
import androidx.test.ext.junit.runners.AndroidJUnit4;

@RunWith(AndroidJUnit4.class)
public class MainActivityTest {

    @Rule
    public ActivityScenarioRule<MainActivity> loginActivityRule =
            new ActivityScenarioRule<>(MainActivity.class);

    @Test
    public void click_Back_Button_Shows_MainActivity(){

    }



}
