package com.jaannurie.game;
import android.app.Activity; import android.os.Bundle; import android.webkit.WebView; import android.webkit.WebSettings; import android.view.WindowManager; import android.content.pm.ActivityInfo;
public class MainActivity extends Activity {
 public void onCreate(Bundle b){super.onCreate(b); getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN); setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE); WebView w=new WebView(this); WebSettings s=w.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); w.loadUrl("file:///android_asset/index.html"); setContentView(w);}
}