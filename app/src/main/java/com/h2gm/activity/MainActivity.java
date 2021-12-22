package com.h2gm.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;

import com.h2gm.R;
import com.h2gm.activity.auth.SignInActivity;
import com.h2gm.sensor.SensorDataGrabber;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //// business logic init

        // sensor API
        final SensorDataGrabber sensorDataGrabber = new SensorDataGrabber(getApplicationContext());
        sensorDataGrabber.displayAvailableSensors();
    }

    @Override
    public void onBackPressed() {
        Intent intent = new Intent(this, SignInActivity.class);
        startActivity(intent);
    }

}